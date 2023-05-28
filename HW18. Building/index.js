import { Human } from "./human";
import { Appartment } from "./appartment";
import { Building } from "./building";

const humanLesia = new Human('Lesia Ukrainka', 'female');
const humanTaras = new Human('Taras Shevchenko', 'male');

const appt402 = new Appartment();
const appt707 = new Appartment();

appt402.addDweller(humanLesia);
appt707.addDweller(humanTaras);

const building15FrankoStr = new Building(1);

building15FrankoStr.addNewAppt(appt402);
building15FrankoStr.addNewAppt(appt707);