import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes');

test('visiting /recipes', function(assert) {

  server.create('recipe');
  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes');
    assert.equal(find('div.recipes div:first div.name').text().trim(), 'tacos');
  });
});

