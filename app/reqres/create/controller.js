import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ReqresCreateController extends Controller {
  @action
  async createUser(user) {
    const createdUser = await this.orbitStore.update(t => t.addRecord({ type: 'user', attributes: user }));
  }
}
