import DateConverter from '~/assets/javascripts/util/date_converter';

export default {
  props: ['startDate', 'endDate'],
  computed: {
    startDateStr: function() {
      return DateConverter.dateToString(this.startDate, false);
    },
    endDateStr: function() {
      return DateConverter.dateToString(this.endDate, false);
    }
  }
}
