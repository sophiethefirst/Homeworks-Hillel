let numArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let positiveNumArr = numArr.filter((num) => num >= 0);
let positiveNumArrSum = positiveNumArr.reduce((sum, current) => sum + current, 0);
console.log(`The array consists of ${positiveNumArr.length} positive numbers.\nSum of the positive numbers is ${positiveNumArrSum}`);

let minNum = Math.min(...numArr);
let minNumIndex = numArr.findIndex(num => num === minNum);
console.log(`The smallest number in the array is ${minNum}, its index is ${minNumIndex}`);

let maxNum = Math.max(...numArr);
let maxNumIndex = numArr.findIndex(num => num === maxNum);
console.log(`The biggest number in the array is ${maxNum}, its index is ${maxNumIndex}`);

let negativeNumArr = numArr.filter((num) => num < 0);
console.log(`The array consists of ${negativeNumArr.length} negative numbers.`);

let positiveNumArrMultiply = positiveNumArr.reduce((prev, current) => prev * current, 1);
console.log(`Product of positive number multiplying is ${positiveNumArrMultiply}`);