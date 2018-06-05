import { repository } from '@loopback/repository';
import { CharityRepository } from '../repositories';
import { Charity } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class UserController {
  constructor(
    @repository(CharityRepository) protected userRepo: CharityRepository,
  ) {}

  @get('/users')
  async findUsers(): Promise<Charity[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<Charity> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(name);
  }
  
}
