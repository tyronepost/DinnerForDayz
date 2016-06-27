import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save(recipe) {
      const { store } = this;
      let record = store.createRecord('recipe', recipe);

      record.save().then(() => {
        this.transitionTo('view', record);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
});
