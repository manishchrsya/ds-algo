/**
 *
 * Problem solving patterns
 *
 *
 * 1. frequency counter pattern
 * 2. Multiple pointer pattern
 * 3. Sliding window pattern
 * 4. Divide and conquer pattern
 * */

/**
 * Frequency counter pattern
 * */
/**
 * Example 1
 * */

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const firstArrElements = {};
  const secondArrElements = {};

  for (let i = 0; i < arr1.length; i++) {
    firstArrElements[arr1[i]] = (firstArrElements[arr1[i]] ?? 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    secondArrElements[arr2[i]] = (secondArrElements[arr2[i]] ?? 0) + 1;
  }
  for (let value in firstArrElements) {
    if (!secondArrElements[value ** 2]) {
      return false;
    }
    if (firstArrElements[value] !== secondArrElements[value ** 2]) {
      return false;
    }
  }
  return "same";
};

const result = same([4, 2, 3], [16, 4, 9]);
console.log("result", result);

/**
 * Example 2 (valid anagram)
 * */

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const firstArrElements = {};
  const secondArrElements = {};

  for (const value of arr1) {
    firstArrElements[value] = (firstArrElements[value] ?? 0) + 1;
  }

  for (const value of arr2) {
    secondArrElements[value] = (secondArrElements[value] ?? 0) + 1;
  }

  for (const key in firstArrElements) {
    if (!secondArrElements[key]) {
      return false;
    }
    if (firstArrElements[key] !== secondArrElements[key]) {
      return false;
    }
  }
  return true;
};

const validAnagramResult = validAnagram("naman", "anamn");

/**
 * Example 3, Find Duplicates in an Array
 *
 * */

const checkDuplicase = (arr) => {
  const arrElements = {};
  for (let value of arr) {
    arrElements[value] = (arrElements[value] ?? 0) + 1;
  }
  for (let key in arrElements) {
    if (arrElements[key] > 1) {
      return "duplicate";
    }
  }
  return "distincts";
};

const checkDuplicaseResult = checkDuplicase([1, 2, 4, 3, 5, 5]);
console.log("checkDuplicaseResult", checkDuplicaseResult);

/**
 * Example 4:- Most Frequent Element
 *
 * */
const getMostFrequentNumber = (arr) => {
  const arrElements = {};
  let mostFrequentElement = { arrkey: arr[0], count: 1 };
  for (let element of arr) {
    arrElements[element] = (arrElements[element] ?? 0) + 1;
  }

  for (let key in arrElements) {
    if (arrElements[key] > mostFrequentElement.count) {
      mostFrequentElement = { arrkey: key, count: arrElements[key] };
    }
  }
  return mostFrequentElement.count;
};

const getMostFrequentNumberResult = getMostFrequentNumber([
  1, 3, 2, 3, 3, 4, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4,
]);
console.log("getMostFrequentNumberResult", getMostFrequentNumberResult);

/**
 * Example 5 :- Count Character Frequencies
 * */
const getCharecterFrequency = (str) => {
  const arr = str.split("");
  const result = {};
  for (let element of arr) {
    result[element] = (result[element] ?? 0) + 1;
  }
  return result;
};
const getCharecterFrequencyResult = getCharecterFrequency("manish");
console.log("getCharecterFrequencyResult", getCharecterFrequencyResult);

/**
 * Example 6:- Find the First Non-Repeating Character
 * */

const getFirstNonRepeated = (str) => {
  const arr = str.split("");
  const arrElements = {};
  for (let element of arr) {
    arrElements[element] = (arrElements[element] ?? 0) + 1;
  }
  for (key in arrElements) {
    if (arrElements[key] === 1) {
      return key;
    }
  }
  return "";
};

const resultgetFirstNonRepeated = getFirstNonRepeated("mmaannish");
console.log("getFirstNonRepeated", getFirstNonRepeated);

/**
 *
 * Example 7:- find missing element
 * */
const findMissingElement = (arr1, arr2) => {
  const elementsArr2Obj = {};
  for (let element of arr2) {
    elementsArr2Obj[element] = (elementsArr2Obj[element] ?? 0) + 1;
  }
  for (let element of arr1) {
    if (!elementsArr2Obj[element]) {
      return element;
    }
  }
};

const resultFindMissingElement = findMissingElement(
  [1, 2, 3, 4, 5],
  [3, 4, 1, 5]
);

console.log("resultFindMissingElement", resultFindMissingElement);

/**
 *
 *
 *
 * multi pointer pattern
 *
 *
 *
 *
 * **/

/**
 * Example:- 1
 * */

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    const sum = arr[left] + arr[right];
    if (sum > 0) {
      right = right - 1;
    } else if (sum < 0) {
      left = left + 1;
    } else {
      return [arr[left], arr[right]];
    }
  }
};
const sumZeroResult = sumZero([-3, -2, -1, 0, -1, 9, 4]);
console.log("sumZeroResult", sumZeroResult);
