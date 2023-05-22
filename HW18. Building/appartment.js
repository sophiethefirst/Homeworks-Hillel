import { Human } from "./human";

export class Appartment extends Human {
    _dwellers = [];
    addDweller(dweller) {
      this._dwellers.push(dweller);
    }
  }