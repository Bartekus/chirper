import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  loadCurrentUser() {
    // session.isAuthenticated is set to true by Simple Auth when we log in
    if (this.get('session.isAuthenticated')) {
      this.get('store')
      .query('user', { me: true })
      .then((userList) => {
        // Since GET requests to /users should always return an array, we want to make sure we only get the first object in the list
        var me = userList.get('firstObject');
        this.set('currentUser', me); // So that we can access it
      });
    }
  }
});
