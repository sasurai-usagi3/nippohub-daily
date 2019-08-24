import marked from '~/assets/javascripts/util/marked';
import AccessKeyRepository from '~/assets/javascripts/repositories/access_key_repository';
import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['accessKey'],
  data: function() {
    return {title: '', content: '', didFind: false};
  },
  mounted: function() {
    const accessKeyRepository = new AccessKeyRepository();
    const dailyReportRepository = new DailyReportRepository();

    accessKeyRepository.fetch(this.accessKey).then(accessKey => {
      const userId = accessKey.userId;
      const dailyReportId = accessKey.dailyReportId;

      return dailyReportRepository.fetch(userId, dailyReportId);
    }).then(dailyReport => {
      this.title = `${dailyReport.date} ${dailyReport.title}`;
      this.content = marked(dailyReport.content);
      this.didFind = true;
    }).catch(() => {
      // TODO: 日報が見つからなかった時の処理
      console.fatal('日報が見つかりません');
    });
  }
}
