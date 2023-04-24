let userArrRequest = prompt('Please, enter your array elements divided by space', '');

const userArr = userArrRequest.split(' ');
console.log(`Array initially entered by user: ${userArr}`);

const sortedUserArr = userArr.sort((a, b) => {
  return a - b;
});
console.log(`Sorted array: ${sortedUserArr}`);

if(userArr.length > 2) {
  sortedUserArr.splice(1, 3); // не присвоювала тут для операції зі splice нову змінну, бо в новій змінній отримую не масив з вирізаними елементами, а самі вирізані елементи
  console.log(`Sorted array with deleted elements: ${sortedUserArr}`);
} else {
  console.log(`Not enough characters were entered. Please, refresh the page and try again.`);
};