const getFactorialRecursive = (number) => {
  if (number === 1) {
    return number;
  }
  return number * getFactorialRecursive(number - 1);
};

const d = getFactorialRecursive(12);
console.log("d", d);

const getFactorialLoop = (number) => {
  let total = 1;
  for (let i = number; i > 0; i--) {
    total *= i;
  }
  return total;
};

console.log(getFactorialLoop(4));
