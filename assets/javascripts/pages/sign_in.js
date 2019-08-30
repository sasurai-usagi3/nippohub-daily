import UserRepository from '~/assets/javascripts/repositories/user_repository';
import MainHeader from '~/components/MainHeader.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data: function() {
    return {email: '', password: ''};
  },
  methods: {
    signIn: function() {
      const repository = new UserRepository();
      repository.authorize(this.email, this.password).then(() => {
        location.href = '/';
      }).catch(e => {
        if(e.code === 'auth/wrong-password') {
          alert('パスワードが違います');
        } else if(e.code === 'auth/user-not-found') {
          alert('パスワードが違います');
        } else {
          console.error(e.code);
          console.error(e.message);
        }
      });
    }
  }
};
