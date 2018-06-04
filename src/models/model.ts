import {Entity, property, model} from '@loopback/repository';

@model()
export class Pizza extends Entity {
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
    type: 'string',
    required: true
  })
  desc: string;

  @property({
    type: 'string',
    required: true
  })
  toppings: string;

  getId() {
    return this.id;
  }
}