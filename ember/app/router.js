import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes', { path: '/recipes' });
  this.route('new', { path: '/recipes/new' });
  this.route('view', {path: '/recipe/view/:id' });
  this.route('edit', {path: '/recipe/edit/:id'});
});

export default Router;
