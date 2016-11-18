import Ember from 'ember';

export default Ember.Route.extend({
  sessionAccount: Ember.inject.service('session-account'),

  beforeModel() {
    this.get('sessionAccount').loadCurrentUser();
  }
});
