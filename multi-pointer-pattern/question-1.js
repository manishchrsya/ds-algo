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
    for (let newIndex = index + 1; newIndex < arr.length; newIndex++) {
      if (arr[newIndex] === requiredElement) {
        return [element, requiredElement];
      }
    }
  }
  return undefined;
}

const val1 = sumZero([-3, -2, -1, 0, _1, -2, -3]);
const val2 = sumZero([-2, 0, 1, 3]);
const val3 = sumZero([1, 2, 3]);

console.log("val", val1, val2, val3);

/**
 * multi pointer method
 * refactored
 * */

function sumZeroOptimized(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

const val4 = sumZeroOptimized([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
const val5 = sumZeroOptimized([-3, -2, -1, 0, 1, 2, 3]);
const val6 = sumZeroOptimized([-2, 0, 1, 3]);
const val7 = sumZeroOptimized([1, 2, 3]);

console.log("val", val4, val5, val6, val7);
