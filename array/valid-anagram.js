/**
 * Valid Anagram:---
 *
 * An anagram is a word or phrase formed by
 * rearranging the letters of a different word of phrase,
 * typically using all the original letters exactly once
 *
 *
 * Question:--- Given two strings s and t return true if t is an anagram of s, and false otherwise
 *
 * */

/***
 * Approach 1:--- using loop (answer is correct but the space complexity in O(n) and time complexity is O(n2) )
 *
 *
 *
 * 1. create array of each character of both the strings of using split
 * 2. check if the length of both array are same or not if not return false
 * 3. loop throw the first array and for each element check if it is present in the other array if yes then remove that item from each array and move to the next one
 *
 * **/

// const isValidAnagram = (text1, text2) => {
//   const arr1 = text1.toLowerCase().split("");
//   const arr2 = text2.toLowerCase().split("");

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     const elementIndexInArr2 = arr2.indexOf(element);
//     if (elementIndexInArr2 === -1) {
//       return false;
//     } else {
//       arr2.splice(elementIndexInArr2, 1);
//     }
//     arr1.splice(index, 1);
//   }
//   return true;
// };

/**
 * approach 2 :-
 * using the sort method (space complexity o(n) and time complexity is o(log(n)))
 *
 * */

// const isValidAnagram = (text1, text2) => {
//   const sortedtext1 = text1.toLowerCase().split("").sort().join("");
//   const sortedtext2 = text2.toLowerCase().split("").sort().join("");
//   console.log("sortedtext1", sortedtext1, sortedtext2);
//   if (sortedtext1 === sortedtext2) {
//     return true;
//   }
//   return false;
// };

/**
 * approach 3:--
 * using the for loop but space complexity O(n) and time complexity O(n)
 *
 * */

const isValidAnagram = (text1, text2) => {
  const arr1 = text1.toLowerCase().split("");
  const arr2 = text2.toLowerCase().split("");
  const collection = {};
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    collection[element] = (collection[element] || 0) + 1;
  }
  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    if (!collection[element]) {
      return false;
    } else {
      collection[element] -= 1;
    }
  }
  return true;
};

/***
 * Approach:--- recursion  this is not working as expected for now
 *
 * 1. create array of each character of both the strings of using split
 * 2. check if the length of both array are same or not if not return false
 * 3. create a function inside the main function that takes both the array as parameter.
 * 4. inside the function pick the first element from the first array and check if it exists in the 2nd array if it does not exists then return false and exit the function.
 * 5. if it find the element in 2nd array then remove the element from both the arrays and call the function and pass them as parameter
 *
 * **/

// const isValidAnagram = (text1, text2) => {
//   const arr1 = text1.toLowerCase().split("");
//   const arr2 = text2.toLowerCase().split("");

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   const helperFunc = (arr1, arr2) => {
//     const newArr1 = [...arr1];
//     const newArr2 = [...arr2];
//     const firstElement = newArr1[0];
//     const elementIndexInArr2 = newArr2.indexOf(firstElement);
//     // console.log("elementIndexInArr2", elementIndexInArr2);
//     if (elementIndexInArr2 === -1) {
//       return false;
//     }
//     if (newArr1.length === 0 && newArr2.length === 0) {
//       return true;
//     } else {
//       newArr2.splice(elementIndexInArr2);
//       newArr1.splice(0);
//       return helperFunc(newArr1, newArr2);
//     }
//     // return true;
//   };
//   return helperFunc(arr1, arr2);
// };

// Input: str1 = “listen”  str2 = “silent”
const val1 = isValidAnagram("listen", "silent"); // true
const val2 = isValidAnagram("anagram", "nagaram"); // true
const val3 = isValidAnagram("hello", "world"); // false
const val4 = isValidAnagram("test", "tseta"); // false
const val5 = isValidAnagram("Listen", "Silent"); // true
const val6 = isValidAnagram("a gentleman", "elegant man"); // true
const val7 = isValidAnagram("abc", "abcd"); // false
const val8 = isValidAnagram("", ""); // true
const val9 = isValidAnagram("déjà vu", "vu déjà"); // true
console.log("val1", val1, val2, val3, val4, val5, val6, val7, val8, val9);
//console.log("val1", val3);
