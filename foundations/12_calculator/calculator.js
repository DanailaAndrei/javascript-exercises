const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, elem) => acc + elem, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, elem) => acc * elem);
};

const power = function(b, e) {
	return Math.pow(b, e);
};

const factorial = function(n) {
	let result = 1;
  while(n > 1){
    result *= n;
    n--;
  }
  return result;
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
