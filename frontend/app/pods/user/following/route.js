import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(params, transition) {
    let [username] = transition.params.user.username;
    // console.log('transition', transition);
    // console.log('params', params);

    return RSVP.hash({
      users: this.store.query('user', { follower: username })
    });
  }
});
