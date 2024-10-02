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
 * multiple pointer pattern
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

/**
 * Example:- 2 count unique values
 * */

const countUnique = (arr) => {
  let left = 0;
  let right = 1;
  let count = 0;
  if (arr.length === 0) {
    return count;
  }
  while (left < arr.length) {
    if (arr[left] === arr[right]) {
      right = right + 1;
    } else {
      count += 1;
      left += 1;
      right = left + 1;
    }
  }
  return count;
};

/**
 * Example 3:- remove the duplicates from the array
 *
 * */

const removeDuplicats = (arr) => {
  let left = 0;
  let right = 1;
  let uniqueArr = [];
  while (left < arr.length) {
    if (arr[left] === arr[right]) {
      right = right + 1;
    } else {
      uniqueArr.push(arr[left]);
      left = right;
      right += 1;
    }
  }
  return uniqueArr;
};

const result1 = removeDuplicats([0, 0, 1, 1, 2, 2, 3, 4]);
console.log("result", result1);

/**
 * Example 4:-Container With Most Water
 *  Difficulty: Medium
 *  Problem Statement: You are given an array height where height[i] represents the height of a vertical line drawn at position i. Find the two lines that together with the x-axis form a container, such that the container can store the most water.
 *  Return the maximum amount of water the container can store.
 * */

const containerWithMostWater = (arr) => {
  let left = 0;
  let right = 1;
  let volume = 0;
  while (left < arr.length) {
    const height = Math.min(arr[left], arr[right]);
    const width = right - left;
    const newVolume = height * width;
    if (volume < newVolume) {
      volume = newVolume;
    }
    if (right < arr.length - 1) {
      right += 1;
    } else {
      left += 1;
      right = left + 1;
    }
  }

  return volume;
};

const containerWithMostWaterResult = containerWithMostWater([
  1, 8, 6, 2, 5, 4, 8, 3, 7,
]);
console.log("result", containerWithMostWaterResult);

/**
 * Sliding window
 *
 * */

/**
 * Example 1:--
 *
 *
 * write a func called maxSubarraySum which accepts an array of
 * integers and a number called n. The func should
 * calculate the max sum of n consecutive elements.
 * */
const func = (arr, num) => {
  let max = 0;
  let temp = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

const funcResult = func([1, 2, 5, 2, 8, 1, 5], 3);

console.log("result", funcResult);

/**
 * Divide and conquer method
 * */

/**
 * Search the number in the sorted array of integers
 *
 * */

/**
 * Binary search solution
 * */

const BinarySearchFunc = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middle = Math.round((min + max) / 2);
    const currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

const BinarySearchFuncResult = BinarySearchFunc(
  [1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29],
  21
);

console.log("result", BinarySearchFuncResult);
