import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class UserController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) {}

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
     
  }
  @get('/users/{user_id}/donations') async getDonationsByUserID (
    @param.path.number('user_id') userID: number,
    @param.query.date('date_from') dateFrom: Date
  ) {
  console.log(userID);
  console.log(dateFrom);
  }

   

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }

}
