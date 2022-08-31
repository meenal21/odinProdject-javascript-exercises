  const add = function(x,y) {
    return x+y;
};

const subtract = function(x,y) {
    return x-y;
};

const sum = function(arr) {
	let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
};

const multiply = function(arr) {
  let x = 1;
  //console.log(arr.length)
  for(let i = 0 ; i < arr.length; i++){
    x *= arr[i]
  }
  return x
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(num) {
	let x = 1;
  if(num == 0 || num == 1){
    return x;
  }
  for(let i = 2; i <= num; i++){
    x *= i
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
