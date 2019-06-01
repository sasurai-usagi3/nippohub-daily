export default class DateConverter {
  static dateToString(date) {
      const alignDigit = x => `0${x}`.slice(-2);

      return `${date.getFullYear()}-${alignDigit(date.getMonth() + 1)}-${alignDigit(date.getDate())} ${alignDigit(date.getHours())}:${alignDigit(date.getMinutes())}`;
  }
}
