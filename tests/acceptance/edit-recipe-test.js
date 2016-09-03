import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit recipe');

test('visiting /edit-recipe', function(assert) {
  visit('/recipes');

  server.createList('recipe', 4);
  andThen(function() {
    assert.equal(currentURL(), '/recipes');
    assert.equal(find('div.recipes #1 div.edit').text().trim(), 'edit');
  });
  // click('.edit');

  // click('a.new');

});
