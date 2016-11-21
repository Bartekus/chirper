import Ember from 'ember';

const { Controller, inject, computed } = Ember;

export default Controller.extend({
  sessionAccount: inject.service('session-account'),

  userIsProfile: computed('model.user', 'sessionAccount.currentUser', function() {
    return this.get('model.user.id') === this.get('sessionAccount.currentUser.id');
  })

});
