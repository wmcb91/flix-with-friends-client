import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fwf-movie/browse-card', 'Integration | Component | fwf movie/browse card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fwf-movie/browse-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fwf-movie/browse-card}}
      template block text
    {{/fwf-movie/browse-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
