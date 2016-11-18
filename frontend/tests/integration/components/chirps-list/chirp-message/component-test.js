import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chirps-list/chirp-message', 'Integration | Component | chirps list/chirp message', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{chirps-list/chirp-message}}`);

  assert.equal(this.$().text().trim(), 'a few seconds ago');
});
