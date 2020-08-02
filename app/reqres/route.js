import Route from '@ember/routing/route';

export default class ReqresRoute extends Route {
  model() {
    return this.orbitStore.query(q => q.findRecords('user'));;
  }
}
