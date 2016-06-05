import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveForm() {
      const { controller } = this;
      const self = this;

      let obj = {
        name: controller.get('name'),
        ingredients: controller.get('ingredients'),
        directions: controller.get('directions')
      };

      let recipe = this.store.createRecord('recipe', obj);

      recipe.save().then(transitionToRecipes).catch((error) => {
        console.log(error);
      });

      function transitionToRecipes() {
        self.transitionTo('recipes');
      }
    }
  }
});
