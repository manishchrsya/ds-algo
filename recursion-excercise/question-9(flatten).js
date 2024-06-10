/**
 * flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * 
*/

/**
 *
 * Approach:---
 *
 * check type of each item.
 *      if it is !== "object" then push them in an blank array
 *      else rerun the recursive function
 *
 *
 */

function flatten(arr) {
  const result = [];
  if (arr.length === 0) {
    return arr;
  }

  const recursiveArray = (arryInput) => {
    for (var i = 0; i < arryInput.length; i++) {
      const item = arryInput[i];

      if (typeof item !== "object") {
        result.push(item);
      } else {
        recursiveArray(item);
      }
    }
  };
  recursiveArray(arr);
  return result;
  // add whatever parameters you deem necessary - good luck!
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
