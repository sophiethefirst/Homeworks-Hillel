import { Human } from "./human";
import { Auto } from "./auto";

const humanLesia = new Human('Lesia Ukrainka', 17);
const humanTaras = new Human('Taras Shevchenko', 42);

const autoToyota = new Auto('Toyota', 'Camry', 2021, 'AE0000BK');
const autoTesla = new Auto('Tesla', 'X', 2020, 'AA7777CH');

autoToyota.addOwner(humanLesia);
autoTesla.addOwner(humanTaras);
autoToyota.autoInformation;
autoTesla.autoInformation;