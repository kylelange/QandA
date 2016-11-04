import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('saved-q-tile', 'Integration | Component | saved q tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{saved-q-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#saved-q-tile}}
      template block text
    {{/saved-q-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
