// TODO: 非常に大きいクラスなので分割し直す
import DateConverter from '~/assets/javascripts/util/date_converter';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';
import DailyReportListLink from '~/components/DailyReportListLink.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  props: ['startAt', 'endAt', 'currentUser'],
  components: {
    DailyReportForm,
    DailyReportList,
    DailyReportListLink,
    MainHeader,
    MainFooter
  },
  data: function() {
    return {currentUserId: null}; // TODO: currentUserId消す
  },
  watch: {
    currentUser: function() {
      this.currentUserId = this.currentUser.id;
    }
  },
  computed: {
    firstDate: function() {
      const today = new Date();

      return this.startAt != null && this.startAt !== '' ? new Date(Date.parse(this.startAt)) : new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
    },
    endDate: function() {
      const today = new Date();

      return this.endAt != null && this.endAt !== '' ? new Date(Date.parse(this.endAt)) : new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0);
    },
  }
};
