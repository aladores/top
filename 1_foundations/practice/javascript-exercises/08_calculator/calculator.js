const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return (array.length ? array.reduce((total,nextItem) => total + nextItem) : 0);
};

/* const multiply = x.reduce((product,current) =>{
  return product*current;
},0); */
const multiply = function (array) {
  return (array.reduce((total,nextItem) => total * nextItem));
};

const power = function (x, y) {
  return result = Math.pow(x, y);
};

const factorial = function (x) {
  let result = 1;
  if (x == 0 || x == 1) {
    return 1;
  }
  else {
    for (i = x; i > 0; i--) {
      result *= i;
    }
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
