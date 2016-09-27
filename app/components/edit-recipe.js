import Ember from 'ember';

const { Component, get, set } = Ember;

export default Component.extend({

  init() {
    this._super(...arguments);
    const recipe = get(this, 'recipe');
    if (!recipe) {
      let obj = {};
      set(this, 'recipe', obj);
    }
  },

  actions: {
    saveForm() {
      const save = get(this, 'save');
      const recipe = get(this, 'recipe');
      console.log('recipe: ' + recipe);
      save(recipe);
    },

    toggleModal() {
      this.toggleProperty('showModal');
    }
  }
});
