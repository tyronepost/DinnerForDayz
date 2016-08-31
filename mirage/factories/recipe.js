import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'tacos',
  directions: 'heat oven to 400 degrees',
  afterCreate(recipe, server) {
    server.createList('ingredient', 10, { recipe });
  }
});
