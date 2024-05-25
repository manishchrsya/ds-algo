/**
 * Implement a func called countUniqueValues, which accepts a sorted array, and counts the unique value in the array.
 * There can be negative numbers in the array, but it will be sorted.
 *
 *
 * countUniqueValue([1,1,1,1,1,2]) --> 2
 * countUniqueValue([1,2,3,4,4,4,7,7,12,12,13]) ---> 7
 * countUniqueValue([]) ---> 0
 * countUniqueValue([-2,1,1,0,-1]) ---> 4
 * */

/**
 * Approach:-
 *
 * 1:----  using for loop
 *      a:- apply for loop
 *      b:- pick the first item push in an array (if not available in the array otherwise skip that)
 *      d:- after the loop exits then return the length of the array in which unique numbers were pushed
 *
 * */

const countUniqueValue = (arr) => {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const alreadyPushed = uniqueArr.includes(element);
    if (!alreadyPushed) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr.length;
};

/**
 * The above solution is totally correct but it has a problem that it has time complexity of O(n) and space complexity of O(n)
 * */

/**
 * ---- use while loop  (two pointer method)
 *
 * */

const countUniqueValueTwoPointer = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

/**
 * This is a more optimized version and it has a time complexity of O(n) wheareas space complexity of O(1)
 * */
