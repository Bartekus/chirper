import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('status-update', 'Integration | Component | status update', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{status-update}}`);

  assert.equal(this.$().text().trim(), 'What are you doing?');
});
