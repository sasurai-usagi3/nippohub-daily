import marked from '~/assets/javascripts/util/marked';
import DailyReportCommentRepository from '~/assets/javascripts/repositories/daily_report_comment_repository';
import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  data: function() {
    return {dailyReportComments: []}
  },
  props: ['dailyReportId'],
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
    }
  }
}
