import Ember from 'ember';

const { Component, computed, inject, on, run } = Ember;

export default Component.extend({
  store: inject.service(),

  chirpText: '',

  remainingChars: computed('chirpText', function() {
    return 140 - this.get('chirpText').length;
  }),

  noCharsLeft: computed('remainingChars', function() {
    return (this.get('remainingChars') < 0);
  }),

  focusOnTextarea: on('didInsertElement', function() {
    run.scheduleOnce('afterRender', () => {
      this.$().find('textarea').focus();
    });
  }),

  actions: {
    postChirp() {
      if (this.get('noCharsLeft')) {
        swal('Woops!', 'You have too many characters in your chirp!', 'error');
        return false;
      }

      let text = this.get('chirpText');

      let chirpData = {
        text,
        createdAt: new Date()
      };

      let newChirp = this.get('store').createRecord('chirp', chirpData);

      newChirp.save().then(() => {
        this.attrs.dismiss();
      });
    }
  }
});
