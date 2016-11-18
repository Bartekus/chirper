import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-glance', 'Integration | Component | profile glance', {
  integration: true
});

test('it renders', function(assert) {
  let expectedRender = 'Chirps | Following | Followers';

  this.render(hbs`{{profile-glance}}`);

  assert.equal(this.$().text().trim().replace(/[ \t]/g, '').replace(/\n{4}/g, ' | '), `${expectedRender}`);
});
