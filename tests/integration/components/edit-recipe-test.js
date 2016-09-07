import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-recipe', 'Integration | Component | edit recipe', {
  integration: true
});

test('it renders with empty values when no model is passed', function(assert) {
  // Set any properties with this.set('myProperty', 'value');

  this.render(hbs`{{edit-recipe}}`);

  let nameVal = this.$('.name').val();
  assert.equal(nameVal, '');

  let directionsVal = this.$('.directions').val();
  assert.equal(directionsVal, '');
});

test('it renders with values prefilled when model is passed', function(assert) {

  this.set('recipe', {
    name: 'tacos',
    ingredients: 'salt',
    directions: 'microwave for 3 minutes'
  });

  this.render(hbs`{{edit-recipe recipe=recipe}}`);

  let nameVal = this.$('.name').val();
  assert.equal(nameVal, 'tacos');

  let directionsVal = this.$('.directions').val();
  assert.equal(directionsVal, 'microwave for 3 minutes');

});
