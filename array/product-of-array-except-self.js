/**
 * iven an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * */

/***
 *
 * not the optimum solution because it has time complexity of o(n2Remove Duplicates from a String)
 *
 * ***/
const productOfArray = (nums) => {
  const productArray = [];
  for (let index = 0; index < nums.length; index++) {
    let pdtofLeft = 1;
    let pdtofRight = 1;
    if (index > 0) {
      for (let idx = 0; idx < index; idx++) {
        pdtofLeft *= nums[idx];
      }
    }
    if (index < nums.length) {
      for (let idx = index + 1; idx < nums.length; idx++) {
        pdtofRight *= nums[idx];
      }
    }
    productArray.push(pdtofLeft * pdtofRight);
  }
  return productArray;
};

const val1 = productOfArray([1, 2, 3, 4]); // [24, 12, 8, 6]
const val2 = productOfArray([1, 2, 0, 4]); // [0, 0, 8, 0]
const val3 = productOfArray([5]); //[1]
const val4 = productOfArray([3, 5]); //[5, 3]
const val5 = productOfArray([-1, -2, -3, -4]); // [-24, -12, -8, -6]
const val6 = productOfArray([-1, 2, -3, 4]); //  [-24, 12, -8, 6]

console.log("result", val1, val2, val3, val4, val5, val6);
