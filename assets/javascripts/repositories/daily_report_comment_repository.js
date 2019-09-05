import firebase from '~/assets/javascripts/util/firebase';
import DailyReportComment from '~/assets/javascripts/models/daily_report_comment';

export default class DailyReportCommentRepository {
  fetch(dailyReportId) {
    return firebase.database().ref(`/daily_reports/${dailyReportId}/comments`).once('value').then(res => {
      const rawDailyReportCommentList = res.val();
      const dailyReportCommentList = [];

      for(let dailyReportCommentId in rawDailyReportCommentList) {
        const dailyReportComment = rawDailyReportCommentList[dailyReportCommentId];
        const postAt = new Date(dailyReportComment.post_at);

        dailyReportCommentList.push(new DailyReportComment(dailyReportCommentId, dailyReportComment.content, dailyReportComment.user_id, postAt));
      }

      return dailyReportCommentList.sort((x1, x2) => {
        if(x1.postAt < x2.postAt) {
          return -1;
        } else if(x1.postAt === x2.postAt) {
          return 0;
        } else {
          return 1;
        }
      }).reverse();
    });
  }

  create(user, dailyReportId, content) {
    return firebase.database().ref(`/daily_reports/${dailyReportId}/comments`).push({
      user_id: user.id,
      content: content,
      post_at: Date.now(),
      created_at: Date.now()
    });
  }

  delete(dailyReportId, dailyReportCommentId) {
    return firebase.database().ref(`/daily_reports/${dailyReportId}/comments/${dailyReportCommentId}`).remove();
  }
}
