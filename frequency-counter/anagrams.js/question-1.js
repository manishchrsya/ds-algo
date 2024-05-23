// An anagram is a word, phrase, or name, formed by rearranging the letters of another
//  such as cinema form with iceman

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
  }
  return true;

  // console.log("obj1", obj1, obj2);
};
const valid = validAnagram("rat", "tar");
console.log("valid", valid);
