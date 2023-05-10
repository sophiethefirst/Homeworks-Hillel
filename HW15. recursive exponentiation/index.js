let pow = (num, degree) => {
    return (degree === 1) ? num : num*pow(num, degree-1);
  };
  
  console.log(pow(2,4));