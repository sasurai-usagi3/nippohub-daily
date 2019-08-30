import DateConverter from '~/assets/javascripts/util/date_converter';
import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['currentUser', 'currentUserId', 'dailyReportId'], // TODO: currentUserId消す
  data: function() {
    return {date: '', title: '', content: ''};
  },
  methods: {
    post: function() {
      const repository = new DailyReportRepository();
      const today = new Date();

      if(this.currentUserId == null && this.currentUser == null) {
        return;
      }

      const currentUserId = this.currentUser != null ? this.currentUser.id : this.currentUserId;

      if(this.dailyReportId != null) {
        repository.update(currentUserId, this.dailyReportId, this.date, this.title, this.content)
          .then(() => location.href = '/');
      } else {
        repository.create(currentUserId, this.date, this.title, this.content)
          .then(() => {
            this.date = DateConverter.dateToString(today, false);
            this.title = '';
            this.content = '';

            this.$emit('submitted');
          });
      }
    }
  },
  mounted: function() {
    const repository = new DailyReportRepository();
    const today = new Date();

    if((this.currentUser != null || this.currentUserId != null) && this.dailyReportId != null) {
      const currentUserId = this.currentUser != null ? this.currentUser.id : this.currentUserId;

      repository.fetch(currentUserId, this.dailyReportId)
        .then(dailyReport => {
          this.date = dailyReport.date;
          this.title = dailyReport.title;
          this.content = dailyReport.content;
        })
        .catch(() => {
          // TODO: 日報が見つからなかった時の処理
          console.fatal('日報が見つかりません');
        });
    } else {
      this.date = DateConverter.dateToString(today, false);
    }
  }
}
