import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findUsers(): Promise<User[]>;
    getDonationsByUserID(userID: number, dateFrom: Date): Promise<void>;
    findUsersById(id: number): Promise<User>;
}
