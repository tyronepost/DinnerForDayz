import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('recipes', params.id);
  },

  actions: {
    save(recipe) {
      recipe.save().then( 
        transitionToRecipes.call(this)
      ).catch((error) => {
        console.log(error);
      });

      function transitionToRecipes() {
        this.transitionTo('recipes');
      }
    }
  }
});
