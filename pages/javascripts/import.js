import firebase from '~/assets/javascripts/firebase.js';
import MainHeader from '~/components/MainHeader.vue';

export default {
  components: {MainHeader},
  data: function() {
    return {currentUser: null, dailyReportsJson: ''};
  },
  methods: {
    requestToImport: function() {
      const database = firebase.database();
      const dailyReports = JSON.parse(this.dailyReportsJson);

      if(this.currentUserId == null) {
        return;
      }

      for(let dailyReport of dailyReports) {
        database.ref('daily_reports/').push({
          date: dailyReport.date,
          title: dailyReport.title || '',
          content: dailyReport.content,
          createdAt: Date.now(), // TODO: タイムスタンプをサーバ側で生成する
          userId: this.currentUserId
        });
      }
    }
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
