import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(params) {
    return RSVP.hash({
      user: this.store.query('user', { username: params.username }).then((users) => {
        return users.get('firstObject');
      })
    });
  }
});
