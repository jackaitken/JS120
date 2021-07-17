/*
Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].
*/


function fewestPalindromicSubstrs(str, arr) {
  let startPtr = 0;
  let endPtr = str.length;
  let substr;

  if (!str.length) return arr;

  while(startPtr < endPtr) {
    substr = str.slice(startPtr, endPtr);
    if (isPalindrome(substr)) {
      arr.push(substr);
      break;
    } else {
      endPtr -= 1;
    }
  }
  str = removeSubstr(str, endPtr);
  return fewestPalindromicSubstrs(str, arr);
}

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

function removeSubstr(str, endIdx) {
  return str.slice(endIdx);
}

console.log(fewestPalindromicSubstrs('yoboyananayoboy', [])); // [ 'yobananaboy' ]
console.log(fewestPalindromicSubstrs('racecarannakayak', [])); // [ 'racecar', 'anna', 'kayak' ]
console.log(fewestPalindromicSubstrs('abc', [])); // ['a', 'b', 'c']