// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { get, post, requestBody} from "@loopback/rest";


export class PizzaController {
  constructor() {}

    @get('/pizzas')

    getPizzas() : Array<object> {

      return [
        { name: "Hawaii",
          topping: "pineapple"}
      ];
    }
    @post("/pizzas")
    requestPizza(@requestBody() pizza: any): object {
      pizza.requested = "yes";
      return pizza;
    }
}

