const firstNum = Number(prompt('Please enter your first number', ));
const secondNum = Number(prompt('Please enter your second number', ));
const thirdNum = Number(prompt('Please enter your third number', ));
alert(`${(firstNum + secondNum + thirdNum) / 3}`);

const userBirthYear = Number(prompt("Please, enter your birth year.", ));
const userCity = prompt("Please, enter name of the city you live in", );
const userFaveSport = prompt("Please, enter your favorite kind of sports", );

const ageCount = Number(2023 - userBirthYear);

alert(`Your age is ${ageCount}. 
      n\${if(userCity === "Kyiv") {
  'You live in the capital of Ukraine'
} else if(userCity === 'Washington') {
  'You live in the capital city of USA'
} else if(userCity === 'London') {
  'You live in the capital city of UK'
} else {
  (`You live in ${userCity} city`)
}}`)