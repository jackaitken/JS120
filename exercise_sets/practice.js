/*
Given a string and array of subarrays that could contain string elements,
return an integer representing the number of times an anagram of the given
string occurs in the collection. Two words are anagrams if they contain 
the same letters in the same quantities; in other words, to create an 
anagram from a word, you must scramble the word’s letters but not add or 
delete any letters. Note that two words are not considered anagrams if 
they are the same word.

reap
[['scram', 'beat', 45, null, 'pear'], [true, 'reap']]

sort the first word
keep a counter
iterate through the arrays
sort each string


*/

function anagramCounter(str, arr) {
  let sortedStr = str.split('').sort().join('').toLowerCase();
  let counter = 0;

  arr.forEach(subarr => {
    subarr.forEach(elem => {
      if (typeof elem === 'string' && elem !== str) {
        elem = elem.split('').sort().join('').toLowerCase();
        if (elem === sortedStr) {
          counter += 1;
        }
      }
    });
  });
  return counter;
}

console.log(anagramCounter('reap', [['scram', 'beat', 45, null, 'pear'], [true, 'reap']]) == 1);
console.log(anagramCounter('meat', [['meat', 'mate', 'meaty', 'matey'], ['tame', 'team']]) == 3);
console.log(anagramCounter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3);
console.log(anagramCounter('veil', [['VILE', 'evil'], []]) == 2);

/*
Given an array of strings in which each string may or may not contain 
punctuation, return a copy of the array in which the alphabetical 
characters are in reverse order, but the punctuation stays in the same place. 

// */
// console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'"])) // ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"];
// console.log(preservePunctuation(["'eard", "why??", "peter", "rabbit", ''])); // ["'drae", "yhw??", "retep", "tibbar", ''];