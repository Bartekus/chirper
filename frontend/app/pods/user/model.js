import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;
const { Model, attr, hasMany } = DS;

export default Model.extend({
  username: attr('string'),
  aboutMe: attr('string'),
  joinedAt: attr('date'),

  followees: hasMany('user', {
    inverse: 'followers'
  }),
  followers: hasMany('user', {
    inverse: 'followees'
  }),
  numberOfFollowing: computed('followees', function() {
    return this.get('followees').get('length');
  }),
  numberOfFollowers: computed('followers', function() {
    return this.get('followers').get('length');
  }),

  chirps: hasMany('chirp', { async: true }),
  numberOfChirps: computed('chirps', function() {
    return this.get('chirps').get('length');
  })
});
