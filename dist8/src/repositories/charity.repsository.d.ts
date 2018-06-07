import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Charity } from '../models';
export declare class CharityRepository extends DefaultCrudRepository<Charity, typeof Charity.prototype.name> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
