import Ember from 'ember';

export default Ember.Controller.extend({
  sessionAccount: Ember.inject.service('session-account'),

  userIsProfile: Ember.computed('model.user', 'sessionAccount.currentUser', function() {
    return this.get('model.user.id') === this.get('sessionAccount.currentUser.id');
  })

});
