import Ember from 'ember';
import config from '../../config/environment';

const { Controller, inject, observer, $ } = Ember;

export default Controller.extend({
  session: inject.service('session'),
  sessionAccount: inject.service('session-account'),

  valuesChanged: observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),
  actions: {
    signup() {
      let userData = {
        username: this.get('username'),
        password: this.get('password')
      };

      $.ajax({
        type: 'POST',
        url: `${config.apiURL}/signup`,
        dataType: 'json',
        data: userData
      })
      .done(() => {
        // console.log('Created!');
        this.send('login');
      })
      .fail(() => {
        this.set('errorMessage', "Couldn't sign up!");
      });
    },

    login() {
      let username = this.get('username');
      let password = this.get('password');

      this.get('session')
      .authenticate('authenticator:oauth2', username, password)
      .then(() => {
        this.get('sessionAccount').loadCurrentUser();
        this.transitionToRoute('home');
      }, () => {
        this.set('errorMessage', 'Wrong username or password!');
      });
    }
  }
});
