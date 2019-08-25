import UserRepository from '~/assets/javascripts/repositories/user_repository';
import MainHeader from '~/components/MainHeader.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data: function() {
    return {email: '', password: '', passwordConfirmation: ''};
  },
  methods: {
    signUp: function() {
      const repository = new UserRepository();

      if(this.password !== this.passwordConfirmation) {
        return;
      }

      repository.create(this.email, this.password).then(() => {
        location.href = '/';
      }).catch(e => {
        if(e.code === 'auth/email-already-in-use') {
          alert('ご入力のメールアドレスは登録済みです');
        } else {
          console.error(e.code);
          console.error(e.message);
        }
      });
    }
  }
};
