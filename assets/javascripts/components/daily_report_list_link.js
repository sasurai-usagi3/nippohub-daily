import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  props: ['basisDate'],
  computed: {
    firstDateOfPrevMonth: function() {
      if (this.basisDate != null) {
        return DateConverter.dateToString(new Date(this.basisDate.getFullYear(), this.basisDate.getMonth() - 1, 1, 0, 0, 0, 0), false);
      } else {
        return '';
      }
    },
    endDateOfPrevMonth: function() {
      if (this.basisDate != null) {
        return DateConverter.dateToString(new Date(this.basisDate.getFullYear(), this.basisDate.getMonth(), 0, 0, 0, 0, 0), false);
      } else {
        return '';
      }
    },
    firstDateOfNextMonth: function() {
      if (this.basisDate != null) {
        return DateConverter.dateToString(new Date(this.basisDate.getFullYear(), this.basisDate.getMonth() + 1, 1, 0, 0, 0, 0), false);
      } else {
        return '';
      }
    },
    endDateOfNextMonth: function() {
      if (this.basisDate != null) {
        return DateConverter.dateToString(new Date(this.basisDate.getFullYear(), this.basisDate.getMonth() + 2, 0, 0, 0, 0, 0), false);
      } else {
        return '';
      }
    }
  }
}
