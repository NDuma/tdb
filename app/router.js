import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

export default Router.map(function() {
  this.route('register');
  this.route('signin');
  this.resource('technologies', function() {
    this.route('read', { path: ':tech_id' });
    this.route('edit', { path: ':tech_id/edit' });
    this.route('create');
  });
})
