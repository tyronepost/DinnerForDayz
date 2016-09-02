import Ember from 'ember';

const { Route } = Ember;
export default Route.extend({
  recipes: null,

  model() {
    return this.store.findAll('recipe');
  }
});
