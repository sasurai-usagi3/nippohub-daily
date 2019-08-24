import firebase from '~/assets/javascripts/util/firebase';
import AccessKey from '~/assets/javascripts/models/access_key';

export default class AccessKeyRepository {
  fetch(accessKey) {
    return firebase.database().ref(`/access_keys/${accessKey}`).once('value').then(r => {
      const accessKey = r.val();

      if(accessKey == null) {
        Promise.reject();
        return;
      }

      return new AccessKey(accessKey.user_id, accessKey.daily_report_id);
    });
  }

  create(userId, dailyReportId) {
    return firebase.database().ref('access_keys').push({
      user_id: userId,
      daily_report_id: dailyReportId
    }).then(r => {
      return r.key;
    });
  }

  delete(accessKey) {
    return firebase.database().ref(`/access_keys/${accessKey}`).set(null);
  }
}
