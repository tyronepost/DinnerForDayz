import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes', { path: '/recipes' });
  this.route('new', { path: '/recipes/new' });
});

export default Router;
