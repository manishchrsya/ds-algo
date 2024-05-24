/**
 * Q:-1 Write a func called sumZero which accepts a sorted array of integers. The func should find the first pair
 * where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 *
 * sumZero([-3,-2,-1,0,1,2,3]) --> [-3,3]
 * sumZero([-2,0,1,3]) --> undefined
 * sumZero([1,2,3]) --> undefined
 *
 * */

/**
 *
 * Approach:--------
 *
 * 1. itterate over the array.
 * 2. take the 1st integer and look for its appropriate pair that sums to zero
 * 3. if no pair found then at the last return undefined
 *
 * */

/**
 * Solution 1.
 * */
function sumZero(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const requiredElement = 0 - element;
    const requiredElementIndex = arr.indexOf(requiredElement);
    if (requiredElementIndex > -1) {
      return [element, requiredElement];
    }
    arr.splice(index, 1);
  }
  return undefined;
}

const val1 = sumZero([-3, -2, -1, 0, 1, 2, 3]);
const val2 = sumZero([-2, 0, 1, 3]);
const val3 = sumZero([1, 2, 3]);

console.log("val", val1, val2, val3);

/**
 * above solution is fine but there is a problem and that is with the time complexity it belongs to O(n^2)
 * */
