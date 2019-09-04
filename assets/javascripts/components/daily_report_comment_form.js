import DailyReportCommentRepository from '~/assets/javascripts/repositories/daily_report_comment_repository';

export default {
  props: ['currentUser', 'dailyReportId'],
  data: function() {
    return {content: ''}
  },
  methods: {
    post: function() {
      if (this.currentUser == null) {
        return;
      }

      new DailyReportCommentRepository().create(this.currentUser, this.dailyReportId, this.content).then(() => {
        this.content = '';
        this.$emit('submitted');
      }).catch(e => {
        alert('送信に失敗しました');
        console.fatal(e)
      });
    }
  }
};
