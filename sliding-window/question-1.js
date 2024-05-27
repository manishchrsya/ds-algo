/**
 * Qusetion:----
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n.
 * The function should calculate the max. sum of n consecutive elements in the array.
 *
 *
 *
 *
 * maxSubarraySum([1,2,5,2,8,1,5],2) ----> 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) -----> 17
 * maxSubarraySum([4,2,1,6],1) ----> 6
 * maxSubarraySum([4,2,1,6,2],4) ---> 13
 * maxSubarraySum([],4) ----> null
 * */

// Approach:--
/**
 * if length is 0 then return null
 * start a for loop with i = 0,
 * take a variable with name lastItemIndex which will be the sum of i and the limit argument.
 * take the sum of items between i to lastitemindex and push it an array outside of the loop.
 * the array should be terminated when lastItemindex reaches to the last item of the array
 * find the largest item in the array.
 */

const maxSubarraySum = (arr, limit) => {
  if (arr.length === 0 || limit > arr.length) {
    return null;
  }
  let largestSum = 0;
  for (i = 0; i < arr.length - limit + 1; i++) {
    let j = i + limit;
    let sum = 0;
    for (k = i; k < j; k++) {
      sum += arr[k];
    }
    if (sum > largestSum) {
      largestSum = sum;
    }
  }
  return largestSum;
};

const a = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //----> 10
const b = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //-----> 17
const c = maxSubarraySum([4, 2, 1, 6], 1); //----> 6
const d = maxSubarraySum([4, 2, 1, 6, 2], 4); //---> 13
const e = maxSubarraySum([], 4); // ----> null
console.log("a", a, b, c, d, e);
// console.log("b", b)
// console.log("c", c)
// console.log("d", d)
