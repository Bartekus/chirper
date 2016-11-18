import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var username = transition.params.user.username;
    // console.log('transition', transition);
    // console.log('params', params);

    return Ember.RSVP.hash({
      users: this.store.query('user', { followee: username })
    });
  }
});
