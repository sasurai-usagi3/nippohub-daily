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
}
