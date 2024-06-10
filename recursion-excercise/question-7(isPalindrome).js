/**
 * isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 * 
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// approach :----
// 1. check if the length of the string is odd, if not return false.
// 2. check if the charecter length is zero the return true.
// 3. take 1 charactor from the 0 index and compare it from last index, if it is same then remove the 0 index and last index charecter from the string and trigger the function recursively till the last element gets removed. else return false.
//

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  const length = str.length;
  const first = str[0];
  const last = str[str.length - 1];

  if (length === 0) {
    return true;
  }
  if (!(length % 2)) {
    return false;
  }

  if (first.toLowerCase() !== last.toLowerCase()) {
    return false;
  }
  const newString = str.slice(1, -1);
  return isPalindrome(newString);
}
