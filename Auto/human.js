export class Human {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
    get humanInformation() {
      return console.log(`Name: ${this._name}, Age: ${this._age}`);
    }
  }