import Ember from 'ember';
import config from '../../../config/environment';

const { Component, inject, computed, $ } = Ember;

export default Component.extend({
  classNames: ['follow-container'],
  session: inject.service('session'),
  sessionAccount: inject.service('session-account'),
  accessToken: computed('session', function() {
    return this.get('session.data.authenticated.access_token');
  }),

  isFollowing: computed('profile.followers', 'sessionAccount.currentUser', function() {
    if (this.get('profile.followers')) {
      return this.get('profile.followers')
      .isAny('id', this.get('sessionAccount.currentUser.id'));
    }
  }),

  actions: {
    follow() {
      $.ajax({
        type: 'POST',
        url: `${config.apiURL}/follow`,
        headers: { 'Authorization': `Bearer ${this.get('accessToken')}` },
        dataType: 'json',
        data: {
          profileId: this.get('profile.id')
        }
      })
      .done(() => {
        // Add yourself to the profile's list of followers
        this.get('profile.followers').pushObject(this.get('sessionAccount.currentUser'));
      })
      .fail(() => {
        swal('Oops', "Couldn't follow user!", 'error');
      });
    },

    unfollow() {
      $.ajax({
        type: 'POST',
        url: `${config.apiURL}/unfollow`,
        headers: { 'Authorization': `Bearer ${this.get('accessToken')}` },
        dataType: 'json',
        data: {
          profileId: this.get('profile.id')
        }
      })
      .done(() => {
        // Remove yourself to the profile's list of followers
        let myFollow = this.get('profile.followers').findBy('id', this.get('sessionAccount.currentUser.id'));
        this.get('profile.followers').removeObject(myFollow);
      })
      .fail(() => {
        swal('Oops', "Couldn't unfollow user!", 'error');
      });
    }
  }

});
