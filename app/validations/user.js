import {
    validatePresence,
    validateLength,
    validateConfirmation,
    validateFormat,
    validateNumber
} from 'ember-changeset-validations/validators';

export default {
    name: [
      validatePresence(true),
      validateLength({ min: 4 })
    ],  
    age: [
        validateNumber({ integer: true }),
        validateNumber({ gte: 18 }),
        validateNumber({ lte: 150 })
    ],
    email: validateFormat({ type: 'email' }),
    password: [
      validateLength({ min: 8 }),
    ],
    confirmPassword: validateConfirmation({ on: 'password' })
};