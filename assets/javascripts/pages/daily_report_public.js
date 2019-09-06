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
    return {currentUser: null};
  },
  mounted: function() {
    const isTestMode = this.$route.query.testMode == 'open_app';

    if (isTestMode && navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
      if (confirm('アプリで開きますか?')) {
        location.href = `nippohub://daily_report/${this.$route.params.access_key}`
      }
    }

    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUser = user;
    });
  }
}
