import Ember from 'ember';

const { Service, inject } = Ember;

export default Service.extend({
  session: inject.service(),
  store: inject.service(),

  loadCurrentUser() {
    // session.isAuthenticated is set to true by Simple Auth when we log in
    if (this.get('session.isAuthenticated')) {
      this.get('store')
      .query('user', { me: true })
      .then((userList) => {
        // Since GET requests to /users should always return an array, we want to make sure we only get the first object in the list
        let me = userList.get('firstObject');
        this.set('currentUser', me); // So that we can access it
      });
    }
  }
});
