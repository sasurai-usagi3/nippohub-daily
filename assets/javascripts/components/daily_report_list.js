import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['startAt', 'endAt', 'currentUserId'],
  data: function() {
    return {dailyReports: []};
  },
  mounted: function() {
    this.attachListener();
  },
  beforeUpdate: function() {
    this.attachListener();
  },
  methods: {
    attachListener() {
      if(this.currentUserId == null) {
        return;
      }

      const today = new Date();
      const firstDateOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
      const endDateOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0); // 年の繰り上げを考えなくてもよしなにやってくれるので問題なし。日付を0にすることで当月の最終日となる
      const startAt = (this.startAt != null && this.startAt !== '') ?
        new Date(this.startAt) : firstDateOfThisMonth;
      const endAt = (this.endAt != null && this.endAt !== '') ?
        new Date(this.endAt) : endDateOfThisMonth;
      const repository = new DailyReportRepository();

      repository.fetchList(this.currentUserId, startAt, endAt)
        .then(dailyReportList => this.dailyReports = dailyReportList);
    }
  }
}
