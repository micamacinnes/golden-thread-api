// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;


import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { LoginRepository } from "../repositories/login.repository";
import { Login } from "../models/login";

export class LoginController {
  constructor(
    @repository(LoginRepository.name) private registrationRepo: LoginRepository
  ) {}

  @get('/logins')

  getLogins() : Array<object> {

    return [
      { name: "micamacinnes",
        password: "macinnes"}
    ];
  }
  @post("/logins")
  requestLogin(@requestBody() login: any): object {
    login.requested = "yes";
    return login;
  }
}


