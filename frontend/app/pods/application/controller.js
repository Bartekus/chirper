import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  appName: "Chirper",
  showingComposeModal: false,
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service('session-account'),

  actions: {
    toggleComposeModal: function() {
      // Toggle boolean value
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});
