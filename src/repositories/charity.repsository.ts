
import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Charity } from '../models';
import { inject } from '@loopback/core';

export class CharityRepository extends DefaultCrudRepository<
  Charity,
  typeof Charity.prototype.name
> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Charity, datasource);
  }
}