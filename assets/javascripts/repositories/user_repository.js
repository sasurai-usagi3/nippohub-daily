import firebase from '~/assets/javascripts/util/firebase';

export default class UserRepository {
  create(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
