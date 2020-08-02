import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PersonFormComponent extends Component {

  @service router;
  @tracked name = '';

  @action
  handleSubmit() {
    this.args.onSubmit({name: this.name});
    debugger
    this.router.transitionTo('reqres.index');
  }
}
