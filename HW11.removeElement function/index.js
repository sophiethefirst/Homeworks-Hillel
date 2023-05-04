const array = [1, 2, 3, 4, 5, 6, 7];

let removeElement = (arr, i) => {
  arr.splice(i, 1);
};

removeElement(array, 4)
console.log(array);