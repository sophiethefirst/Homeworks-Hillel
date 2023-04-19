const userBirthYear = prompt("Please, enter your birth year.", );
const userCity = prompt("Please, enter name of the city you live in", );
const userFaveSport = prompt("Please, enter your favorite kind of sports", );

let userCityResponse = null;
let userFaveSportResponse = null;
let userBirthYearResponse = null;

const currentYear = 2023;

const ageCount = Number(currentYear - userBirthYear);

switch(userBirthYear) {
  case null:
    userBirthYearResponse = 'It is a pity you didn\'t want to enter your birth year.';
    break;
  default:
    userBirthYearResponse = `You are ${ageCount} years old.`
    break;
};

switch(userCity) {
  case 'Kyiv':
    userCityResponse = 'You live in the capital of Ukraine';
    break;
  case 'Washington':
    userCityResponse = 'You live in the capital of USA';
    break;
  case 'London':
    userCityResponse = 'You live in the capital of UK';
    break;
  case null:
    userCityResponse = 'It is a pity you didn\'t want to enter your city name';
    break; 
  default:
    userCityResponse = `You live in ${userCity} city`
    break;
};

switch(userFaveSport) {
  case 'basketball':
    userFaveSportResponse = 'Cool! Do you want to become Michael Jordan?';
    break;
  case 'golf':
    userFaveSportResponse = 'Cool! Do you want to become Tiger Woods?';
    break;
  case 'football':
    userFaveSportResponse = 'Cool! Do you want to become Lionel Messi?';
    break;
  case null:
    userFaveSportResponse = 'It is a pity you didn\'t want to enter your favorite kind of sport.'
    break; 
  default:
    userFaveSportResponse = 'Cool! Do you want to become a great sportsman?'
    break;
};

// if(userBirthYear === null){
//   userBirthYearResponse = 'It is a pity you didn\'t want to enter your birth year.'
// } else {
//   userBirthYearResponse = `You are ${ageCount} years old.`
// }

// if(userCity === 'Kyiv') {
//   userCityResponse = 'You live in the capital of Ukraine';
// } else if(userCity === 'Washington') {
//   userCityResponse = 'You live in the capital of USA';
// } else if(userCity === 'London') {
//   userCityResponse = 'You live in the capital of UK';
// } else if(userCity === null) {
//   userCityResponse = 'It is a pity you didn\'t want to enter your city name';
// } else {
//   userCityResponse = `You live in ${userCity} city`
// };

// if(userFaveSport === 'basketball') {
//   userFaveSportResponse = 'Cool! Do you want to become Michael Jordan?';
// } else if (userFaveSport === 'golf') {
//   userFaveSportResponse = 'Cool! Do you want to become Tiger Woods?';
// } else if (userFaveSport === 'football') {
//   userFaveSportResponse = 'Cool! Do you want to become Lionel Messi?';
// } else if(userFaveSport === null) {
//   userFaveSportResponse = 'It is a pity you didn\'t want to enter your favorite kind of sport.'
// } else {
//   userFaveSportResponse = 'Cool! Do you want to become a great sportsman?'
// };
  
alert(`${userBirthYearResponse} \n${userCityResponse} \n${userFaveSportResponse}`);