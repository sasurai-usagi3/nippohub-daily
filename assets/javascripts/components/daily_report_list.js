import firebase from '~/assets/javascripts/util/firebase.js';
import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  props: ['currentUserId'],
  data: function() {
    return {dailyReports: [
    ]};
  },
  mounted: function() {
    if(this.currentUserId == null) {
      return;
    }

    const database = firebase.database().ref(`users/${this.currentUserId}/daily_reports/`);

    database.off(); // TODO: 全イベントハンドラが消えてしまうので範囲を狭める
    database.orderByChild('date').startAt('2019-05-02').endAt('2019-05-16').limitToLast(30).on('value', res => {
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
