// An anagram is a word, phrase, or name, formed by rearranging the letters of another
//  such as cinema form with iceman

// anagram , nagaram
//

/**
 *
 * approach:-
 *
 * 1. Convert string to array by spliting.
 * 2. iterate to both the array and store in objects
 * 3. check if the both objects have all the keys from eachother
 * 4. check each key occus same number of times in both the objects
 *
 *
 */

const validAnagram = (string1, string2) => {
  const arr1 = string1.split("");
  const arr2 = string2.split("");
  // console.log("arr", arr1, arr2)
  const obj1 = {};
  const obj2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (!(obj1[key] === obj2[key])) {
      return false;
    }
  }
  return true;
};

// tests:----
const a = validAnagram("", ""); // true
const b = validAnagram("aaz", "zza"); // false
const c = validAnagram("anagram", "nagaram"); // true
const d = validAnagram("rat", "car"); // false) // false
const e = validAnagram("awesome", "awesom"); // false
const f = validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
const g = validAnagram("qwerty", "qeywrt"); // true
const h = validAnagram("texttwisttime", "timetwisttext"); // true
// const valid = validAnagram("", "")
console.log("valid", a, b, c, d, e, f, g, h);

/**
 * refactored version
 *
 * */

const validAnagramREfactored = (string1, string2) => {
  const arr1 = string1.split("");
  const arr2 = string2.split("");
  const obj = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    obj[val] = (obj[val] || 0) + 1;
  }
  for (let val of arr2) {
    if (!obj[val]) {
      return false;
    }
    obj[val] -= 1;
  }
  return true;
};
