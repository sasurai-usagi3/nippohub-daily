// TODO: 非常に大きいクラスなので分割し直す
import UserRepository from '~/assets/javascripts/repositories/user_repository';
import DateConverter from '~/assets/javascripts/util/date_converter';
import MainHeader from '~/components/MainHeader.vue';
import DailyReportForm from '~/components/DailyReportForm.vue';
import DailyReportList from '~/components/DailyReportList.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  props: ['startAt', 'endAt'],
  components: {
    DailyReportForm,
    DailyReportList,
    MainHeader,
    MainFooter
  },
  data: function() {
    return { currentUserId: null };
  },
  computed: {
    firstDate: function() {
      const today = new Date();

      return DateConverter.dateToString(this.startAt != null && this.startAt !== '' ? new Date(Date.parse(this.startAt)) : new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0), false);
    },
    endDate: function() {
      const today = new Date();

      return DateConverter.dateToString(this.endAt != null && this.endAt !== '' ? new Date(Date.parse(this.endAt)) : new Date(today.getFullYear(), today.getMonth() + 1, 0, 0, 0, 0, 0), false);
    },
    firstDateOfPrevMonth: function() {
      const firstDate = new Date(Date.parse(this.firstDate));

      return DateConverter.dateToString(new Date(firstDate.getFullYear(), firstDate.getMonth() - 1, 1, 0, 0, 0, 0), false);
    },
    endDateOfPrevMonth: function() {
      const endDate = new Date(Date.parse(this.firstDate));

      return DateConverter.dateToString(new Date(endDate.getFullYear(), endDate.getMonth(), 0, 0, 0, 0, 0), false);
    },
    firstDateOfNextMonth: function() {
      const firstDate = new Date(Date.parse(this.firstDate));

      return DateConverter.dateToString(new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 1, 0, 0, 0, 0), false);
    },
    endDateOfNextMonth: function() {
      const endDate = new Date(Date.parse(this.firstDate));

      return DateConverter.dateToString(new Date(endDate.getFullYear(), endDate.getMonth() + 2, 0, 0, 0, 0, 0), false);
    }
  },
  mounted: function() {
    const repository = new UserRepository();

    repository.fetch().then(user => {
      this.currentUserId = (user != null) ? user.id : null;
    });
  }
};
