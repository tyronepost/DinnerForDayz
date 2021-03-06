import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model
} = DS;

export default Model.extend({
  recipe: belongsTo('recipe'),
  name: attr('string'),
  amount: attr('number'),
  unit: attr('string')
});
