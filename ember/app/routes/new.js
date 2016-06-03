import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({

  actions: {
    saveForm() {
      let obj = {
        name: get(this, 'name'),
        ingredients: get(this, 'incredients'),
        directions: get(this, 'directions')
      };

      let recipe = this.store.createRecord('recipe', obj);

      recipe.save().then(function() {
        this.transitionTo('recipes');
      });
    }
  }
});
