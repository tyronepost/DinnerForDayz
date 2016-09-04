import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.list.cycle('Jason\'s famous tacos', 'burritos', 'tostadas', 'nachos')(i);
  },
  directions: 'heat oven to 400 degrees',
  afterCreate(recipe, server) {
    server.createList('ingredient', 7, { recipe });
  }
});
