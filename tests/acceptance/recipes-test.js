import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes');

test('visiting /recipes', function(assert) {

  server.createList('recipe', 4);
  visit('/recipes');

  andThen(function() {
    assert.equal(currentURL(), '/recipes');
    assert.equal(find('div.recipes #1 div.name').text().trim(), 'tacos');
  });
});

