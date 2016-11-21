import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  application: inject.controller(),
  session: inject.service(),
  sessionAccount: inject.service('session-account'),

  actions: {
    openComposeModal() {
      this.get('application').send('toggleComposeModal');
    },
    logout() {
      this.get('session').invalidate();
      this.transitionToRoute('index');
    }
  }
});
