/**
 *
 * Frequency counter
 *
 * */

// Q:-1
// ex:-1  [1, 2, 3], [4,1,9] ---> true
// ex:-2 [1, 2, 3], [1, 9, 1] ---> false
// ex:-2 [1,2,1], [4,4,1] ---> false (must be of same frequency)

/**
 * Approach
 *
 * */
/**
1. check the length should be same,
2. arr2.includes(arr1.item^2)
3. remove the item from arr2
*/
/**
 * My solution :- 1 (version -1)
 *
 */
const sameFrequency = (arr1, arr2) => {
  const arr = [];
  const newArr = [...arr2];
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      const item1 = arr1[i];
      const squareNumberIndex = newArr.findIndex((item) => {
        return item1 ** 2 === item;
      });
      if (squareNumberIndex === -1) {
        arr.push(false);
      } else {
        newArr.splice(squareNumberIndex, 1);
        arr.push(true);
      }
    }
    return arr.every((item) => item);
  } else {
    return false;
  }
};
const value1 = sameFrequency([1, 2, 3], [4, 1, 9]);
const value2 = sameFrequency([1, 2, 3], [1, 9, 1]);
const value3 = sameFrequency([1, 2, 1], [4, 4, 1]);
console.log("value", value1, value2, value3);

/**
 * Solution 2 (version -2 )
 * */

const sameFrequency1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const squareNumberIndex = arr2.indexOf(item1 ** 2);
    if (squareNumberIndex === -1) {
      return false;
    }
    arr2.splice(squareNumberIndex, 1);
  }
  return true;
};
const value4 = sameFrequency1([1, 2, 3], [4, 1, 9]);
const value5 = sameFrequency1([1, 2, 3], [1, 9, 1]);
const value6 = sameFrequency1([1, 2, 1], [4, 4, 1]);
console.log("value", value4, value5, value6);

/**
 *
 *  Solution 3 (version - 3)
 *
 * */

const sameFrequencyRefactored = (arr1, arr2) => {
  const obj1 = {};
  const obj2 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
};
