import firebase from '~/assets/javascripts/util/firebase.js';
import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  props: ['startAt', 'endAt', 'currentUserId'],
  data: function() {
    return {dailyReports: [
    ]};
  },
  mounted: function() {
    if(this.currentUserId == null) {
      return;
    }

    const database = firebase.database().ref(`users/${this.currentUserId}/daily_reports/`);
    let query = database.orderByChild('date');

    if (this.startAt != null && this.startAt !== '') {
      query = query.startAt(this.startAt);
    }

    if (this.endAt != null && this.endAt !== '') {
      query = query.endAt(this.endAt);
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
