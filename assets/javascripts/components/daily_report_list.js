import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

const getTermOfTargetDailyReports = (basisDate, startDate, endDate) => {
  const firstDateOfMonth = new Date(basisDate.getFullYear(), basisDate.getMonth(), 1, 0, 0, 0, 0);
  const endDateOfMonth = new Date(basisDate.getFullYear(), basisDate.getMonth() + 1, 0, 0, 0, 0, 0); // 年の繰り上げを考えなくてもよしなにやってくれるので問題なし。日付を0にすることで当月の最終日となる

  return [startDate != null ?  new Date(startDate) : firstDateOfMonth, endDate != null ?  new Date(endDate) : endDateOfMonth];
}

const fetchDailyReport = (currentUser, startDate, endDate) => {
  if (currentUser == null) {
    return;
  }

  return new DailyReportRepository().fetchList(currentUser.id, startDate, endDate)
}

export default {
  props: ['currentUser', 'startAt', 'endAt'],
  data: function() {
    return {dailyReports: []};
  },
  watch: {
    startAt: function() {
      const [startDate, endDate] = getTermOfTargetDailyReports(new Date(), this.startAt, this.endAt);

      fetchDailyReport(this.currentUser, startDate, endDate)
        .then(dailyReportList => this.dailyReports = dailyReportList);
    },
    endAt: function() {
      const [startDate, endDate] = getTermOfTargetDailyReports(new Date(), this.startAt, this.endAt);

      fetchDailyReport(this.currentUser, startDate, endDate)
        .then(dailyReportList => this.dailyReports = dailyReportList);
    }
  },
  mounted: function() {
    const [startDate, endDate] = getTermOfTargetDailyReports(new Date(), this.startAt, this.endAt);

    fetchDailyReport(this.currentUser, startDate, endDate)
      .then(dailyReportList => this.dailyReports = dailyReportList);
  }
}
