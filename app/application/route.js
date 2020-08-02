import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ApplicationRoute extends Route {
    @service dataCoordinator;

    async beforeModel() {
        await this.dataCoordinator.activate();
    }

    model() {
        return this.store.findAll('message');
    }
}
