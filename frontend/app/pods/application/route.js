import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  sessionAccount: inject.service('session-account'),

  beforeModel() {
    this.get('sessionAccount').loadCurrentUser();
  }
});
