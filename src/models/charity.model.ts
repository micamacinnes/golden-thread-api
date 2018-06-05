import { Entity, property, model } from '@loopback/repository';

@model()
export class Charity extends Entity {
  @property({
    type: 'string',
    name: true,
  })
  name?: string;

  @property({
    type: 'string',
    required: true
  })
  email: string;

  @property({
    type: 'string',
    required: true
  })
  website: string;

  @property({
    type: 'string',
    required: true,
  })
  phonenumber: string;


  getName() {
    return this.name;
  }
}