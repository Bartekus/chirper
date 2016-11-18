import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chirps-list', 'Integration | Component | chirps list', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{chirps-list}}`);

  assert.equal(this.$().text().trim(), 'There are no chirps to display.');
});
