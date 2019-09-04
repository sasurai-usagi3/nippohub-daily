import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

const fetchDailyReport = (currentUser, startDate, endDate) => {
  if (currentUser == null) {
    return;
  }

  return new DailyReportRepository().fetchList(currentUser.id, startDate, endDate)
}

export default {
  props: ['currentUser', 'startDate', 'endDate', 'version'],
  data: function() {
    return {dailyReports: []};
  },
  watch: {
    startDate: function() {
      fetchDailyReport(this.currentUser, this.startDate, this.endDate)
        .then(dailyReportList => this.dailyReports = dailyReportList);
    },
    endDate: function() {
      fetchDailyReport(this.currentUser, this.startDate, this.endDate)
        .then(dailyReportList => this.dailyReports = dailyReportList);
    },
    version: function() {
      fetchDailyReport(this.currentUser, this.startDate, this.endDate)
        .then(dailyReportList => this.dailyReports = dailyReportList);
    }
  },
  mounted: function() {
    fetchDailyReport(this.currentUser, this.startDate, this.endDate)
      .then(dailyReportList => this.dailyReports = dailyReportList);
  }
}
