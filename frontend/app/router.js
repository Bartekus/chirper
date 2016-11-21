import Ember from 'ember';
import config from './config/environment';

// eslint-disable-next-line ember-suave/no-direct-property-access
const Router = Ember.Router.extend({
  location: config.locationType,

  didTransition() {
    this._super(...arguments);
  },

  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/home' });
  this.route('user', { path: 'profile/:username' }, function() {
    this.route('following');
    this.route('followers');
  });
});

export default Router;
