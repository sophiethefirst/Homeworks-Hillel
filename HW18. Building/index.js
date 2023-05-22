import { Human } from "./HW19. Building/human";
import { Appartment } from "./HW19. Building/appartment";
import { Building } from "./HW19. Building/building";

const humanLesia = new Human('Lesia Ukrainka', 'female');
const humanTaras = new Human('Taras Shevchenko', 'male');

const appt402 = new Appartment();
const appt707 = new Appartment();

appt402.addDweller(humanLesia);
appt707.addDweller(humanTaras);

const building15FrankoStr = new Building(1);

building15FrankoStr.addNewAppt(appt402);
building15FrankoStr.addNewAppt(appt707);