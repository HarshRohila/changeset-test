import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ApplicationRoute extends Route {
    @service dataCoordinator;

    async beforeModel() {
        // Populate the store from backup prior to activating the coordinator
        const backup = this.dataCoordinator.getSource('backup');
        const transform = await backup.pull(q => q.findRecords());
        await this.orbitStore.sync(transform);

        await this.dataCoordinator.activate();
    }

    model() {
        return this.store.findAll('message');
    }
}
