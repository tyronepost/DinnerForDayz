import Model from 'ember-data/model';
import attr from 'ember-data/attr';
export default Model.extend({
  name: attr('string'),
  ingredients: attr('string'),
  directions: attr('string'),
  created_at: attr('date'),
  updated_at: attr('date')
});
