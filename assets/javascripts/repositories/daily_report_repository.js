import firebase from '~/assets/javascripts/util/firebase';
import DateConverter from '~/assets/javascripts/util/date_converter';
import DailyReport from '~/assets/javascripts/models/daily_report';

export default class DailyReportRepository {
  fetchList(userId, startAt, endAt) {
    const database = firebase.database().ref(`users/${userId}/daily_reports/`);
    let query = database.orderByChild('date');

    if (startAt != null) {
      query = query.startAt(DateConverter.dateToString(startAt, false));
    }

    if (endAt != null) {
      query = query.endAt(DateConverter.dateToString(endAt, false));
    }

    return query.once('value').then(res => {
      const rawDailyReportList = res.val();
      const dailyReportList = [];

      for(let dailyReportId in rawDailyReportList) {
        const dailyReport = rawDailyReportList[dailyReportId];
        const createdAt = new Date(dailyReport.createdAt);

        dailyReportList.push(new DailyReport(dailyReportId, dailyReport.date, dailyReport.title, dailyReport.content, DateConverter.dateToString(createdAt), dailyReport.access_key));
      }

      return dailyReportList.sort((x1, x2) => {
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
