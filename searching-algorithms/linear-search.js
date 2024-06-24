/**
 * Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found,
 * otherwise the search continues till the end of the data set.
 *
 *
 *
 *There are many different methods on array in javascript,
 *
 *  IndexOf
 *  includes
 * find
 * findIndex
 *
 *
 * Big O Notation of Linear Notation is O(n)
 */

//  Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// Examples:

// linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1

function linearSearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!

  for (var i = 0; i < arr.length; i++) {
    const arrItem = arr[i];
    if (arrItem === value) {
      return i;
    }
  }
  return -1;
}
