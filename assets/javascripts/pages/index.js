import firebase from '~/assets/javascripts/util/firebase.js';
import DateConverter from '~/assets/javascripts/util/date_converter';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    DailyReportForm,
    DailyReportList,
    MainHeader,
    MainFooter
  },
  data: function() {
    const $route = this.$nuxt.$route;
    const today = new Date();
    const firstDate = $route.query.start_at != null && $route.query.start_at !== '' ? new Date(Date.parse($route.query.start_at)) : new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    // 年の繰り上げを考えなくてもよしなにやってくれるので問題なし。日付を0にすることで当月の最終日となる
    const endDate = $route.query.end_at != null && $route.query.end_at !== '' ? new Date(Date.parse($route.query.end_at)) : new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0);
    const firstDateOfPrevMonth = new Date(firstDate.getFullYear(), firstDate.getMonth() - 1, 1, 0, 0, 0, 0);
    const endDateOfPrevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0, 0, 0, 0, 0);
    const firstDateOfNextMonth = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 1, 0, 0, 0, 0);
    const endDateOfNextMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 2, 0, 0, 0, 0, 0);

    return {
      currentUserId: null,
      firstDate: DateConverter.dateToString(firstDate, false),
      endDate: DateConverter.dateToString(endDate, false),
      firstDateOfPrevMonth: DateConverter.dateToString(firstDateOfPrevMonth, false),
      endDateOfPrevMonth: DateConverter.dateToString(endDateOfPrevMonth, false),
      firstDateOfNextMonth: DateConverter.dateToString(firstDateOfNextMonth, false),
      endDateOfNextMonth: DateConverter.dateToString(endDateOfNextMonth, false)
    };
  },
  methods: {
    deleteAll: function() {
      const database = firebase.database().ref('daily_reports/');

      if(this.currentUserId == null) {
        return;
      }

      database.orderByChild('userId').equalTo(this.currentUserId).on('value', res => {
        const dailyReportList = res.val();

        for(let dailyReportId in dailyReportList) {
          const database = firebase.database().ref(`daily_reports/${dailyReportId}`);

          database.remove();
        }
      });
    }
  },
  mounted: function() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      this.currentUserId = (user != null) ? user.uid : null;
    });
  }
};
