import { CharityRepository } from '../repositories';
import { Charity } from '../models';
export declare class CharityController {
    protected charityRepo: CharityRepository;
    constructor(charityRepo: CharityRepository);
    findCharity(): Promise<Charity[]>;
    findCharitybyName(name: string): Promise<Charity>;
}
