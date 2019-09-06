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
    if (navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
      console.log('SP');
      if (confirm('アプリで開きますか?')) {
        console.log('Open App');
      }
    }

    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUser = user;
    });
  }
}
