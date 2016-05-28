import Ember from 'ember';

var recipes = [
  { name: 'tacos', ingredients: 'salt', directions: 'heat oven to 400 degrees'}
];
export default Ember.Route.extend({
  model() {
    return recipes;
  }
});
