import { Human } from "./human";

export class Auto extends Human {
    constructor(brand, model, year, plate) {
        super();
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._plate = plate;
        this._owner = null;
    }
    
    addOwner(owner) {
        if(owner._age < 18) {
            console.log('Minors cannot become car owners. Try to find a person who is 18 or older.');
        } else {
            this._owner = owner;
        }
    }
    
    get autoInformation() {
        console.log(`Brand: ${this._brand}, Model: ${this._model}, Year: ${this._year}, Plate: ${this._plate}`);
        if(this._owner === null) {
            console.log(`${this._brand} ${this._model} doesn't have an owner.`)
        } else {
            this._owner.humanInformation;
        }
    }
}