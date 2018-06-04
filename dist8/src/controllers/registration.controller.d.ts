import { RegistrationRepository } from "../repositories/registration.repository";
export declare class RegistrationController {
    private registrationRepo;
    constructor(registrationRepo: RegistrationRepository);
    getRegistrations(): Array<object>;
    requestRegistration(registration: any): object;
}
