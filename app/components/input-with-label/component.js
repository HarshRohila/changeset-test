import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';

export default class InputWithLabelComponent extends Component {

    @tracked hasError = false;

    get errorMsgs() {
        const { formObj, formObjKey } = this.args;

        const errorMsgs = formObj.error[formObjKey].validation;
        if (typeof errorMsgs === 'string') {
            return [errorMsgs];
        }

        return errorMsgs;
    }

    @action
    validateProperty( formObj, formObjKey, { target } ) {

        formObj.set( formObjKey, target.value );

        if (formObj.error[formObjKey]) {
            this.hasError = true;
        } else {
            this.hasError = false;
        }
    }

    @action
    checkValidity(changeset, value) {
        this._checkValidity.perform(changeset, this.args.formObjKey, value);
    }

    @(task(function* (changeset, valuePath, value) {
        yield timeout(150);
    
        // valuePath is the property on the changeset, e.g. firstName
        changeset.set(valuePath, value);
    
        if (!changeset.error[valuePath]) {
          this.hasError = false;
        }
    })).restartable() _checkValidity
}
