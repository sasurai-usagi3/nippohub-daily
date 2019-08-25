import firebase from '~/assets/javascripts/util/firebase';
import User from '~/assets/javascripts/models/user';

export default class UserRepository {
  fetch() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user != null ? new User(user.uid, user.email) : null);
      });
    });
  }

  create(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  authorize(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}
