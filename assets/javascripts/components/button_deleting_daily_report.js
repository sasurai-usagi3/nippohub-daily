import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['currentUser', 'dailyReportId'],
  methods: {
    destroy: function() {
      const repository = new DailyReportRepository();

      repository.delete(this.currentUser.id, this.dailyReportId).then(() => location.href = '/');
    }
  }
}
