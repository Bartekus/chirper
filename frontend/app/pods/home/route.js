import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route, RSVP } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return RSVP.hash({
      chirps: this.store.findAll('chirp')
    });
  }
});
