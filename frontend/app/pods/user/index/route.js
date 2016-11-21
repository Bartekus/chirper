import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    // Using the parent route's model
    return this.modelFor('user').user.get('chirps');
  }
});
