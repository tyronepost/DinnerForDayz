import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save(recipe) {
//      const { controller, store } = this;
        const { store } = this;

//      let obj = {
//        name: controller.get('name'),
//        ingredients: controller.get('ingredients'),
//        directions: controller.get('directions')
//      };

      let record = store.createRecord('recipe', recipe);

      record.save().then(
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
