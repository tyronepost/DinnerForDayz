import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveForm() {
      let obj = {
        name: this.controller.get('name'),
        ingredients: this.controller.get('ingredients'),
        directions: this.controller.get('directions')
      };

      let recipe = this.store.createRecord('recipe', obj);

      recipe.save().then(function() {
        console.log('save successful');
      });
      this.transitionTo('recipes');
    }
  }
});
