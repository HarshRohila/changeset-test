import Route from '@ember/routing/route';

export default class ReqresRoute extends Route {
  model() {
    return this.orbitStore.liveQuery(q => q.findRecords('user'));
  }
}
