import marked from '~/assets/javascripts/util/marked';
import firebase from '~/assets/javascripts/util/firebase.js';
import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['accessKey'],
  data: function() {
    return {title: '', content: '', didFind: false};
  },
  mounted: function() {
    const database = firebase.database();
    const repository = new DailyReportRepository();

    new Promise((resolve, reject) => {
      database.ref(`/access_keys/${this.accessKey}`).once('value', r => {
        const accessKey = r.val();

        if(accessKey == null) {
          reject();
        }

        resolve(accessKey);
      });
    }).then((accessKey) => {
      const userId = accessKey.user_id;
      const dailyReportId = accessKey.daily_report_id;

      repository.fetch(userId, dailyReportId)
        .then(dailyReport => {
          this.title = `${dailyReport.date} ${dailyReport.title}`;
          this.content = marked(dailyReport.content);
          this.didFind = true;
        })
        .catch((x) => {
          // TODO: 日報が見つからなかった時の処理
          console.fatal('日報が見つかりません');
        });
    });
  }
}
