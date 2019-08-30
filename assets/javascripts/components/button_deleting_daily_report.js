import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['currentUserId', 'dailyReportId'],
  methods: {
    destroy: function() {
      const repository = new DailyReportRepository();

      repository.delete(this.currentUserId, this.dailyReportId).then(() => location.href = '/');
    }
  }
}
