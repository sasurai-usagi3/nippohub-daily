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

        dailyReportList.push(new DailyReport(dailyReportId, dailyReport.date, dailyReport.title, dailyReport.content, dailyReport.access_key));
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

  fetch(userId, dailyReportId) {
    return firebase.database().ref(`users/${userId}/daily_reports/${dailyReportId}`).once('value').then(r => {
      const dailyReport = r.val();

      if(dailyReport == null) {
        Promise.reject();
        return;
      }

      return new DailyReport(dailyReport.Id, dailyReport.date, dailyReport.title, dailyReport.content, dailyReport.access_key);
    });
  }

  create(userId, date, title, content) {
    return firebase.database().ref(`users/${userId}/daily_reports`).push({
      date: date,
      title: title,
      content: content,
      createdAt: Date.now() // TODO: タイムスタンプをサーバ側で生成する
    });
  }

  update(userId, dailyReportId, date, title, content) {
    return firebase.database().ref(`users/${userId}/daily_reports/${dailyReportId}`).update({
      date: date,
      title: title,
      content: content
    });
  }

  updateAccessKey(userId, dailyReportId, accessKey) {
    return firebase.database().ref(`users/${userId}/daily_reports/${dailyReportId}`).update({
      access_key: accessKey
    });
  }

  delete(userId, dailyReportId) {
    return firebase.database().ref(`users/${userId}/daily_reports/${dailyReportId}`).remove();
  }
}
