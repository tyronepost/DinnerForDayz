import Ember from 'ember';

const { $, set } = Ember;

export default Ember.Route.extend({
  recipes: null,

  model() {
    return $.getJSON('/api/recipes');
  }
});
