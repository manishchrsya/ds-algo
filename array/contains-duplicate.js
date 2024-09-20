/**
 * Contains duplicate:---
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and returns false if every element is distinct
 * */

/***
 *
 *
 * Solution 1(row approach):--
 * */

const containsDuplicate = (nums) => {
  const uniqueNums = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const elementAlreadyAdded = uniqueNums.indexOf(element) > -1;
    if (elementAlreadyAdded) {
      return true;
    } else {
      uniqueNums.push(element);
    }
  }
  return false;
};
// test cases:---

const val1 = containsDuplicate([1, 1, 2, 3, 4, 5]);
const val2 = containsDuplicate([1, 8, 2, 3, 4, 5]);
const val3 = containsDuplicate([1]);
const val4 = containsDuplicate([]);

console.log(`cases:----
case1:- ${val1}
case2:- ${val2}
case3:- ${val3}
case4:- ${val4}
`);
