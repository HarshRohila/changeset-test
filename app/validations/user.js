import {
    validatePresence,
    validateLength,
    validateConfirmation,
    validateFormat
} from 'ember-changeset-validations/validators';

export default {
    name: [
      validatePresence(true),
      validateLength({ min: 4 })
    ],
    // age: validateCustom({ foo: 'bar' }),
    email: validateFormat({ type: 'email' }),
    password: [
      validateLength({ min: 8 }),
    ],
    passwordConfirmation: validateConfirmation({ on: 'password' })
};