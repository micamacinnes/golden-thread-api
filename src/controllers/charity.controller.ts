import { repository } from '@loopback/repository';
import { CharityRepository } from '../repositories';
import { Charity } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class CharityController {
  constructor(
    @repository(CharityRepository) protected charityRepo: CharityRepository,
  ) {}

  @get('/charity')
  async findCharity(): Promise<Charity[]> {
    return await this.charityRepo.find();
  }

  @get('/charity/{name}')
  async findCharitybyName(@param.path.string('name') name: string ): Promise<Charity> {
    // Check for valid ID
    let charityExists: boolean = !!(await this.charityRepo.count({ name }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest(`charity ${name} does not exist`);
    }

    return await this.charityRepo.findName(name);
  }
  
}


