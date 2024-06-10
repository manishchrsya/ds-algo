/**
 * stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. 
Keep the original object unchanged.
 * 
*/

const stringifyNumbers = (obj) => {
  // calculations will go here...

  /**
   * Approach:----
   *
   * what do we have here:---- nested obj.
   *
   * recursion will be used.
   *
   */

  const result = Object.assign({}, obj);

  const helperFunc = (inputObj) => {
    for (var key in inputObj) {
      const value = inputObj[key];
      if (typeof value === "object") {
        helperFunc(value);
      } else {
        if (typeof value === "number") {
          inputObj[key] = `${value}`;
        }
      }
    }
    return inputObj;
  };

  return helperFunc(result);
};

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
