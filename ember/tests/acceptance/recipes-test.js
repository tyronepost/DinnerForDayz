import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes');

test('visiting /recipes', function(assert) {
  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes');
    assert.equal(find('ul.recipes li:first').text(), 'tacos');
  });

});

test('should add new recipe', function(assert) {
  visit('/recipes');

  click('a.new');
  andThen(function() {
    assert.equal(currentURL(), '/recipes/new');
  });

  andThen(function() {
    assert.equal(currentURL(), '/recipes/new');
    fillIn('input.name', 'tacos');
    fillIn('textarea.ingredients', 'salt');
    fillIn('textarea.directions', 'turn oven to 450');
  });
});

