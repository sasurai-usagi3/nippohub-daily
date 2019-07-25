import firebase from '~/assets/javascripts/util/firebase.js';
import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  props: ['startAt', 'endAt', 'currentUserId'],
  data: function() {
    return {dailyReports: [
    ]};
  },
  mounted: function() {
    this.attachListener();
  },
  beforeUpdate: function() {
    this.attachListener();
  },
  methods: {
    attachListener() {
      if(this.currentUserId == null) {
        return;
      }

      const database = firebase.database().ref(`users/${this.currentUserId}/daily_reports/`);
      let query = database.orderByChild('date');
      const today = new Date();

      if (this.startAt != null && this.startAt !== '') {
        query = query.startAt(this.startAt);
      } else {
        const firstDateOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);

        query = query.startAt(DateConverter.dateToString(firstDateOfThisMonth, false));
      }

      if (this.endAt != null && this.endAt !== '') {
        query = query.endAt(this.endAt);
      } else {
        const endDateOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0); // 年の繰り上げを考えなくてもよしなにやってくれるので問題なし。日付を0にすることで当月の最終日となる

        query = query.endAt(DateConverter.dateToString(endDateOfThisMonth, false));
      }

      database.off(); // TODO: 全イベントハンドラが消えてしまうので範囲を狭める
      query.on('value', res => {
        const dailyReportList = res.val();
        const dailyReports = [];

        for(let dailyReportId in dailyReportList) {
          const dailyReport = dailyReportList[dailyReportId];
          const createdAt = new Date(dailyReport.createdAt);

          dailyReports.push({id: dailyReportId, title: dailyReport.title, createdAt: DateConverter.dateToString(createdAt), date: dailyReport.date});
        }

        this.dailyReports = dailyReports.sort((x1, x2) => {
          if(x1.date < x2.date) {
            return -1;
          } else if(x1.date === x2.date) {
            return 0;
          } else {
            return 1;
          }
        }).reverse();
      });
    }
  }
}
