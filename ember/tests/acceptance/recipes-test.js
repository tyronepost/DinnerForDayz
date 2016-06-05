import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes');

test('visiting /recipes', function(assert) {

  server.create('recipe');

  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes');
    assert.equal(find('ul.recipes li:first').text().trim(), 'tacos');
  });

});

test('I can add a new recipe', function(assert) {

  server.create('recipe');

  visit('/recipes');
  click('a.new');

  andThen(function() {
    assert.equal(currentURL(), '/recipes/new');
    fillIn('input.name', 'lasagna');
    fillIn('textarea.ingredients', 'salt');
    fillIn('textarea.directions', 'turn oven to 450');

  });

  click('button.submit');

  andThen(function() {
    assert.equal(currentURL(), '/recipes');
    assert.equal(find('ul.recipes li:last').text().trim(), 'lasagna');
  });
});

