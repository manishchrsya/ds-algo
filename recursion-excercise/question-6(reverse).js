/**
 * reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * 
 * 
*/

function reverse(str) {
  if (str.length === 0) {
    return "";
  }
  return `${str[str.length - 1]}${reverse(str.slice(0, -1))}`;

  // add whatever parameters you deem necessary - good luck!
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
