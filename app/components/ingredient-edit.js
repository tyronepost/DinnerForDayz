import Ember from 'ember';

const {
  Component
} = Ember;

const options = ['LBS', 'TBSP', 'TSP', 'CUP', 'count'];

export default Component.extend({
  options: options
});
