import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveForm() {
      const { controller } = this;
      let obj = {
        name: controller.get('name'),
        ingredients: controller.get('ingredients'),
        directions: controller.get('directions')
      };

      let recipe = this.store.createRecord('recipe', obj);

      recipe.save().then(function() {
        console.log('save successful');
      });
      this.transitionTo('recipes');
    }
  }
});
