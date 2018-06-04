import { UserRepository } from "../repositories/user.repository";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getUsers(): Array<object>;
    requestUser(user: any): object;
}
