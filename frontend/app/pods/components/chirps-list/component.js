import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'ul',
  classNames: ['card'],
  chirpsSorting: ['createdAt:desc'],
  sortedChirps: computed.sort('chirps', 'chirpsSorting')
});
