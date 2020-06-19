import Component from '@glimmer/component';
import UserValidations from '../../validations/user';
import { action } from '@ember/object';

export default class UserFormComponent extends Component {
    userValidations = UserValidations

    @action
    handleSubmit( user ) {
        document.activeElement && document.activeElement.blur();

        if (!user.isInvalid) {
            console.log('submit successful');
            // user.save();
        }
    }
}
