import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveForm() {
      const { controller, store } = this;

      let obj = {
        name: controller.get('name'),
        ingredients: controller.get('ingredients'),
        directions: controller.get('directions')
      };

      let recipe = store.createRecord('recipe', obj);

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
