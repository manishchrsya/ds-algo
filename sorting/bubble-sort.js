/**
 * Bubble Sort:-----
 *
 *
 * A sorting algorithm where the largest values bubble up to the top.
 *
 * [_5_,_3_,4,1,2] => [3,_5_,_4_1,2] => [3,4,_5_,_1_,2] => [3,4,1,_5_,_2_] => [3,4,1,2,5] 1st iteration
 *
 * continue same process till all the elements in the array are sorted.
 * */

/**
 * Example 1:-
 *  write a function to bubble sort elements.
 * */

/**
 * here is the basic solution for the bubble sorting
 * */

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const result = bubbleSort([37, 45, 29, 8, 12, 88, 100]);

console.log("result", result);

/**
 * so lets say in the above solution the provided array is nearly sorted then in that case there will be so many unnecessary iterations on the array to get this issue eliminated here is an modified version of tha same code
 *
 *
 * in this we will be checking if there is any iteration that did not swap any elements if so we will make the for loop exit and the function gets terminated with the latest sorted array
 * */

const optimizedBubbleSort = (arr) => {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
};

const optimizedBubbleSortResult = optimizedBubbleSort([
  37, 45, 29, 8, 12, 88, 100,
]);

console.log("result", result);
