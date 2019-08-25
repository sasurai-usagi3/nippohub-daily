import DailyReportIndex from '~/components/DailyReportIndex.vue';
import UserRepository from '~/assets/javascripts/repositories/user_repository';

export default {
  data: function() {
    return {currentUser: null}
  },
  components: {
    DailyReportIndex
  },
  mounted: function() {
    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUser = user;
    });
  }
}
