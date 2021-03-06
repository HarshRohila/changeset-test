import EmberRouter from '@ember/routing/router';
import config from 'changeset-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('changeset');
  this.route('todo');
  this.route('reqres', function() {
    this.route('create');
  });
});
