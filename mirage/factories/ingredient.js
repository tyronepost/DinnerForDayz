import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.list.cycle('ground beef', 'corn tortilla', 'salt', 'pepper', 'chili powder', 'onions', 'garlic')(i);
  },
  amount(i) {
    return faker.list.cycle('1', '12', '0.5', '0.5', '0.25', '0.5', '1')(i);
  },
  unit(i) {
    return faker.list.cycle('LBS', 'count', 'TBSP', 'TBSP', 'TSP', 'CUP', 'TBSP')(i);
  }
});
