/**
 * collectStrings
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

 * 
*/

const collectStrings = (obj) => {
  const result = [];

  const helperFunc = (inputObj) => {
    for (var key in inputObj) {
      const value = inputObj[key];

      if (typeof value === "object") {
        helperFunc(value);
      } else {
        if (typeof value === "string") {
          result.push(value);
        }
      }
    }
  };

  helperFunc(obj);

  return result;
};

// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };

// collectStrings(obj); // ["foo", "bar", "baz"])
