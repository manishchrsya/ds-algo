/**
 * capitalizeFirst
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
 * 
*/

/**
 *
 * iterate over the items extract the first letter make it uppercase and return in the same item
 *
 */

function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return arr;
  }
  const result = [];

  const helperFunc = (inputArr) => {
    const currentItem = inputArr[0];
    if (currentItem) {
      const capitalizedItem = `${currentItem[0].toUpperCase()}${currentItem.slice(
        1
      )}`;
      result.push(capitalizedItem);
      helperFunc(inputArr.slice(1));
    }
  };
  helperFunc(arr);
  return result;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
