import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';
import DailyReportListLink from '~/components/DailyReportListLink.vue';
import DailyReportSearchForm from '~/components/DailyReportSearchForm.vue';
import MainFooter from '~/components/MainFooter.vue';
import UserRepository from '~/assets/javascripts/repositories/user_repository';

export default {
  components: {
    DailyReportForm,
    DailyReportList,
    DailyReportListLink,
    DailyReportSearchForm,
    MainHeader,
    MainFooter
  },
  data: function() {
    const today = new Date();
    const firstDate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0);

    return {currentUser: null, firstDate, endDate}
  },
  watch: {
    '$route': function() {
      const today = new Date();
      const firstDateFromParams = this.$route.query.start_at;
      const endDateFromParams = this.$route.query.end_at;

      this.firstDate = firstDateFromParams != null && firstDateFromParams !== '' ? new Date(Date.parse(firstDateFromParams)) : new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
      this.endDate = endDateFromParams != null && endDateFromParams !== '' ? new Date(Date.parse(endDateFromParams)) : new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0);
    }
  },
  mounted: function() {
    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUser = user;
    });
  }
}
