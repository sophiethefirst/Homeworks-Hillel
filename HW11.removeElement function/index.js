const array = [1, 2, 3, 4, 5, 6, 7];

let removeElement = (arr, e) => {
  const index = arr.indexOf(e);
  arr.splice(index, 1);
};

removeElement(array, 4)
console.log(array);