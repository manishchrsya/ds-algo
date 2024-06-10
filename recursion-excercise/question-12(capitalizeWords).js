/**
 * capitalizeWords
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized
 * 
*/

function capitalizeWords(arr) {
  const result = [];
  if (arr.length === 0) {
    return [];
  }

  const helperFunc = (inputArr) => {
    if (inputArr[0]) {
      result.push(inputArr[0].toUpperCase());

      helperFunc(inputArr.slice(1));
    }
  };

  helperFunc(arr);

  return result;
  // add whatever parameters you deem necessary - good luck!
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
