import { Model, attr } from 'ember-orbit';

export default class User extends Model {
  @attr('string') email;
  @attr('string') name;
}
