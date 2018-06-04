import { LoginRepository } from "../repositories/login.repository";
export declare class LoginController {
    private registrationRepo;
    constructor(registrationRepo: LoginRepository);
    getLogins(): Array<object>;
    requestLogin(login: any): object;
}
