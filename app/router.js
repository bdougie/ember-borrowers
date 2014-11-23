import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('friends', function() {
    this.route('new');
    this.route('show', { path: ':friend_id' });
  });
  this.route('friends/show');
});

export default Router;
