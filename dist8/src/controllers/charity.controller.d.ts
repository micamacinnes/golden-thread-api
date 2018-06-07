import { CharityRepository } from '../repositories';
import { Charity } from '../models';
export declare class CharityController {
    protected userRepo: CharityRepository;
    constructor(userRepo: CharityRepository);
    findUsers(): Promise<Charity[]>;
    findUsersById(id: number): Promise<Charity>;
}
