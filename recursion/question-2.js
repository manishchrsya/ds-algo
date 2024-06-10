const sumRange = (number) => {
  if (number === 1) {
    return number;
  }
  return number + sumRange(number - 1);
};

const d = sumRange(5);
console.log("d", d);

const getSum = (number) => {
  let count = 0;
  for (let i = number; i > 0; i--) {
    count = count + i;
  }
  return count;
};

console.log(getSum(5));
