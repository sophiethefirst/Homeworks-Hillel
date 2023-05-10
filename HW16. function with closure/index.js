function doMath(){
    let total = 0;
    return function(num){
      total += num;
      return total;
    }
  };
  
  const sum = doMath();
   
  console.log(sum(3));
  console.log(sum(5));
  console.log(sum(20));