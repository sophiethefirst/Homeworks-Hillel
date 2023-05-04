// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const randomArr = ['q',1,'w','e',12,'r','t','y',196,46,'u','i',22,1045,'o',true];

let countNum = (arr) => {
  const numOnly = arr.filter(element => typeof element === 'number');
  const result = numOnly.reduce((sum, current) => sum + current, 0);
  return result/numOnly.length;
};

console.log(countNum(randomArr));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
let firstNum = +prompt('Введіть перше число');
let secondNum = +prompt('Введіть друге число');
let znak = prompt('Введіть математичну дію (+, -, *, /, %, ^)');

let doMath = (x, znak, y) => {
  switch(znak) {
    case '+':
      return x+y;
      break;
    case '-':
      return x-y;
      break;
    case '*':
      return x*y;
      break;
    case '/':
      return x/y;
      break;
    case '%':
      return x%y;
      break;
    case '^':
      return x^y;
      break;
  };
};

const result = doMath(firstNum, znak, secondNum);
alert(result);

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let fillArray = () => {
  let mainArrLength = +prompt('Введіть довжину головного масиву');
  let subArrLength = +prompt('Введіть довжину вкладених масивів');
  let data = prompt('Введіть елементи, які потрібно внести (через кому)');
  let dataArray = data.split(',');
  let result = [];
  
  for (let i = 0; i <= dataArray.length; i += subArrLength) {
    let subArr = dataArray.slice(i, i + subArrLength);
    result.push(subArr);
  }
  
  while (result.length > mainArrLength) {
    result.pop();
  }
  return result;
}

console.log(fillArray());

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let deleteLetters = (sentence, letters) => {
  let userSentence = prompt('Введіть ваш рядок');
  let lettersToDelete = prompt('Введіть символи, розділені комою, які ви хотіли би видалити з рядка');
  const userStrArr = sentence.split('');
  const filteredArr = userStrArr.filter(e => !letters.includes(e));
  return filteredArr.join('');
};

const resultStr = deleteLetters(userSentence, lettersToDelete);
console.log(resultStr);