import Route from '@ember/routing/route';

export default class ChangesetRoute extends Route {
  model() {
    return this.store.createRecord('user');
  }
}
