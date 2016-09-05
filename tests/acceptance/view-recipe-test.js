import { test } from 'qunit';
import moduleForAcceptance from 'dinner-for-dayz-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view recipe');

test('visiting /recipe/view/1', function(assert) {
  visit('/recipes');

  server.createList('recipe', 4);
  andThen(function() {
    assert.equal(currentURL(), '/recipes');
  });

  click('div.recipes #1 div.name a.view');

  andThen(function() {
    assert.equal(currentURL(), '/recipe/view/1');
    assert.equal(find('#1 .name').text().trim(), 'ground beef');
  });
});
