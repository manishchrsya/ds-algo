/**
 * question:---  write a function that takes a number as a parameter and prints console in reducing manner.
 *  parameter = 5
 *
 * result :--- 5, 4, 3, 2, 1, "Its Done"
 * */

const getNumberNormal = (number) => {
  for (i = number; i > 0; i--) {
    console.log("number", i);
  }
  console.log("Its Done");
};

getNumberNormal(5);

/***
 *  below is the example of the same problem as a recursive function
 *
 * */

const getNumberRecursion = (number) => {
  if (number === 0) {
    console.log("Its Done");
    return;
  }
  console.log("number", number);
  const newNumber = number - 1;
  getNumberRecursion(newNumber);
};

getNumberRecursion(5);
