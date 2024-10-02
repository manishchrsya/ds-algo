/**
 * Selection sort:-
 *
 * similar to bubble sort, but instead of the first placing large values into sorted position, it places small values into sorted position
 *
 * ex:- [5,3,4,1,2]
 *
 * in the above example we will compare 2 values one after other to the last one and will find the smallest value and then after the loop ends will shift it to the starting position as per the indexing and freeze that value, so as a result:-
 *
 *  [5,3,4,1,2] ==> [1,5,3,4,2] ==> [1,2,5,3,4] =>  ==> [1,2,3,4,5]
 *
 * */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    if (i !== lowest) {
      const currentIndexValue = arr[i];
      arr[i] = arr[minValueIndex];
      arr[minValueIndex] = currentIndexValue;
    }
  }
  return arr;
};

const result = selectionSort([5, 3, 4, 1, 2]);

console.log("result", result);
