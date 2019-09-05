import marked from '~/assets/javascripts/util/marked';
import DailyReportCommentRepository from '~/assets/javascripts/repositories/daily_report_comment_repository';
import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  data: function() {
    return {dailyReportComments: []}
  },
  props: ['dailyReportId', 'version'],
  watch: {
    version: function() {
      return new DailyReportCommentRepository().fetch(this.dailyReportId).then(
        dailyReportComments => this.dailyReportComments = dailyReportComments
      );
    }
  },
  mounted: function() {
    return new DailyReportCommentRepository().fetch(this.dailyReportId).then(
      dailyReportComments => this.dailyReportComments = dailyReportComments
    );
  },
  methods: {
    dateToString: function(date) {
      return DateConverter.dateToString(date);
    },
    parseMD: function(content) {
      return marked(content);
    },
    destroy: function(e) {
      const target = e.currentTarget;
      const commentId = target.dataset.commentId;

      new DailyReportCommentRepository()
        .delete(this.dailyReportId, commentId)
        .then(() => {
          this.dailyReportComments = this.dailyReportComments.filter(x => x.id != commentId);
        });
    }
  }
}
