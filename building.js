import { Appartment } from "./appartment";
export class Building extends Appartment {
    _appartments = [];
    constructor(maxAppts) {
      super();
      this._maxAppts = maxAppts;
    }
    
    addNewAppt(appt) {
        if(this._appartments.length < this._maxAppts) {
          this._appartments.push(appt);
        } else {
          return console.log('You have already reached max number of appartments in the building.');
        }
      }
    }