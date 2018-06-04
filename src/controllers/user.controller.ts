// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;

import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}


  @get('/users')

  getUsers() : Array<object> {

    return [
      { name: "Mica MacInnes",
        email: "micamac@umich.edu"}
    ];
  }
  @post("/users")
  requestUser(@requestBody() user: any): object {
    user.requested = "yes";
    return user;
  }
}


