export default class DateConverter {
  static dateToString(date, useTime = true) {
    const alignDigit = x => `0${x}`.slice(-2);

    if (useTime) {
      return `${date.getFullYear()}-${alignDigit(date.getMonth() + 1)}-${alignDigit(date.getDate())} ${alignDigit(date.getHours())}:${alignDigit(date.getMinutes())}`;
    } else {
      return `${date.getFullYear()}-${alignDigit(date.getMonth() + 1)}-${alignDigit(date.getDate())}`;
    }
  }
}
