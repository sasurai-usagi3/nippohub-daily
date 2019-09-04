import marked from '~/assets/javascripts/util/marked';
import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';
import ShareLink from '~/components/ShareLink.vue';
import DailyReportCommentList from '~/components/DailyReportCommentList.vue';
import DailyReportCommentForm from '~/components/DailyReportCommentForm.vue';

export default {
  components: {ShareLink, DailyReportCommentList, DailyReportCommentForm},
  props: ['currentUser', 'dailyReportId'],
  data: function() {
    return {title: '', content: '', accessKey: null, didFind: false, dailyReportCommentVersion: Date.now()};
  },
  mounted: function() {
    if(this.currentUser == null) {
      return;
    }

    const repository = new DailyReportRepository();

    repository.fetch(this.currentUser.id, this.dailyReportId)
      .then(dailyReport => {
        this.title = `${dailyReport.date} ${dailyReport.title}`;
        this.content = marked(dailyReport.content);
        this.accessKey = dailyReport.accessKey;
        this.didFind = true;
      })
      .catch(() => {
        // TODO: 日報が見つからなかった時の処理
        console.fatal('日報が見つかりません');
      });
  },
  methods: {
    updateDailyReportCommentVersion: function() {
      this.dailyReportCommentVersion = Date.now();
    }
  }
}
