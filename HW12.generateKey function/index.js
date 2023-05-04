const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

let generateKey = (length, arr) => {
  const resultArr = [];
  for(let i = 0; i <= length; i++) {
    const randomIndex = Math.floor(Math.random()*arr.length);
    resultArr.push(arr[randomIndex]);
  }
  return resultArr.join('');
};

const key = generateKey(16, characters);
console.log(key);