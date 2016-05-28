import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes');

test('visiting /recipes', function(assert) {
  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes');
  });
});

test('should add new recipe', function(assert) {
  visit('/recipes/new');

  andThen(function() {
    assert.equal(currentURL(), '/recipes/new');
    fillIn('input.name', 'tacos');
  });
});
