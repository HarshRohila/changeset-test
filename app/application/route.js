import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    model() {
        return this.store.createRecord('user', {
            name: 'Harsh',
            email: 'rohilaharsh@gmail.com',
            age: 23,
        });
    }
}
