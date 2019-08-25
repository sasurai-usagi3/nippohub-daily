import UserRepository from '~/assets/javascripts/repositories/user_repository';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportPublicDetail from '~/components/DailyReportPublicDetail.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    DailyReportPublicDetail,
    MainFooter
  },
  data: function() {
    return {currentUserId: null};
  },
  mounted: function() {
    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUserId = (user != null) ? user.id : null;
    });
  }
}
