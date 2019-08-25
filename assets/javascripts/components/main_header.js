import UserRepository from '~/assets/javascripts/repositories/user_repository';

export default {
  props: ['currentUserId'],
  methods: {
    signOut: function() {
      const repository = new UserRepository();

      repository.clearSession().then(() => location.href = '/');
    }
  }
}
