import marked from '~/assets/javascripts/util/marked';
import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';
import ShareLink from '~/components/ShareLink.vue';

export default {
  components: {ShareLink},
  props: ['currentUserId', 'dailyReportId'],
  data: function() {
    return {title: '', content: '', accessKey: null, didFind: false};
  },
  mounted: function() {
    if(this.currentUserId == null) {
      return;
    }

    const repository = new DailyReportRepository();

    repository.fetch(this.currentUserId, this.dailyReportId)
      .then(dailyReport => {
        this.title = `${dailyReport.date} ${dailyReport.title}`;
        this.content = marked(dailyReport.content);
        this.accessKey = dailyReport.accessKey;
        this.didFind = true;
      })
      .catch((x) => {
        // TODO: 日報が見つからなかった時の処理
        console.fatal('日報が見つかりません');
      });
  }
}
