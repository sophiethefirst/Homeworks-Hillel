//     Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numFromTenToTwenty = [];
for(let i=10; i<=20; i++){
  numFromTenToTwenty.push(i);
};
console.log(numFromTenToTwenty);

//     Вивести квадрати чисел від 10 до 20.
let numSqFromTenToTwenty = [];
for(let i=10; i<=20; i++){
  numSqFromTenToTwenty.push(i*i);
}
console.log(numSqFromTenToTwenty);

//     Вивести таблицю множення на 7.
console.log('Таблиця множення на 7:')
let numForTable = 1;
while (numForTable <= 10) {
  let result = numForTable*7;
  console.log(`7*${numForTable} = ${result}`);
  numForTable++;
}

//     Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for(let i=1; i<=15; i++){
  sum+=i;
};
console.log(sum);

//     Знайти добуток усіх цілих чисел від 15 до 35.
let initialNum = 1;
for(let i=15; i<=35; i++){
  initialNum*=i;
};
console.log(`multiplication ${initialNum}`);

//     Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let newSum = 0;
for(let i=1; i<=500; i++){
  newSum+=i;
}
console.log(newSum/500);

//     Вивести суму лише парних чисел в діапазоні від 30 до 80.
let anotherSum = 0;
let firstNum = 30;
while(firstNum <= 80) {
  if(firstNum%2 === 0) {
    anotherSum+=firstNum;
  }
  firstNum++;
}
console.log(anotherSum);

//     Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let multiplesOfThree = [];
for(let i=100; i<=200; i++){
  if(i%3 === 0){
    multiplesOfThree.push(i);
  }
}
console.log(multiplesOfThree);