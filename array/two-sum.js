/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 * 
 * */

/**
 * Approach :--- (using for loop)
 *
 *
 *
 * */

const twoSum = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const remainingNumber = target - element;
    const remainingNumberIndex = nums.findIndex((num, idx) => {
      if (idx !== index && num === remainingNumber) {
        return idx;
      }
    });
    if (remainingNumberIndex > -1) {
      return [index, remainingNumberIndex];
    }
  }
};

const val1 = twoSum([2, 7, 11, 15], 9); // [0, 1]
const val2 = twoSum([3, 2, 4], 6); // [1, 2]
const val3 = twoSum([3, 3], 6); // [0, 1]
const val4 = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17); // [7, 8]
const val5 = twoSum([-1, -2, -3, -4, -5], -8); // [2, 4]
const val6 = twoSum([-10, 7, 19, 15], 5); // [0, 3]
const val7 = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20); // [4, 14]

console.log("result", val1, val2, val3, val4, val5, val6, val7);
