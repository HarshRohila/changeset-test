import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationPageComponent extends Component {

  @service store;
  @tracked message = '';

  @action
  handleSubmit() {
    const message = this.store.createRecord('message', { text: this.message });
    message.save();
    this.message = '';
  }
}
