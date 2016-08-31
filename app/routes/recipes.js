import Ember from 'ember';

export default Ember.Route.extend({
  recipes: null,

  model() {
    return this.store.findAll('recipe');
  }
});
