import UserRepository from '~/assets/javascripts/repositories/user_repository';

export default {
  props: ['currentUserId', 'currentUser'], // TODO: currentUserIdを消す
  methods: {
    signOut: function() {
      const repository = new UserRepository();

      repository.clearSession().then(() => location.href = '/');
    }
  }
}
