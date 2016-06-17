import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save(recipe) {
      const { store } = this;
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
