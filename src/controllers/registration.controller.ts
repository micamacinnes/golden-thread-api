// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;

import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { RegistrationRepository } from "../repositories/registration.repository";
import { Registration } from "../models/registration";

export class RegistrationController {
  constructor(
    @repository(RegistrationRepository.name) private registrationRepo: RegistrationRepository
  ) {}


  @get('/registrations')

  getRegistrations() : Array<object> {

    return [
      { name: "Hawaii",
        topping: "pineapple"}
    ];
  }
  @post("/registrations")
  requestRegistration(@requestBody() registration: any): object {
    registration.requested = "yes";
    return registration;
  }
}


