import {Entity, property, model} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  name: string;

  @property({
    type: 'string'
  })
  desc: string;

  @property({
    type: 'string'
  })
  email: string;

  getId() {
    return this.id;
  }
}