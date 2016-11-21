import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  appName: 'Chirper',
  showingComposeModal: false,
  session: inject.service(),
  sessionAccount: inject.service('session-account'),

  actions: {
    toggleComposeModal() {
      // Toggle boolean value
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});
