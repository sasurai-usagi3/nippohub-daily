export default class DailyReport {
  constructor(id, date,title, content, createdAt, accessKey) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.accessKey = accessKey;
  }
}
