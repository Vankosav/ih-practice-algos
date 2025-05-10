// 1. Write a function that takes an array of numbers and returns the largest number in the array.
function largestNumber(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] >= num){
      num = array[i];
    }
  }
  return num;
}


const array = [1, 141, 23, 10, 9, 92];
//console.log(largestNumber(array));

// 2. Write a function that takes a string and returns the number of vowels in the string.
const vowels = ['a', 'e', 'i', 'o', 'u']

function numberOfVowels(string) {
  let count = 0;
  for (let letter of string.toLowerCase()) {
    if (vowels.includes(letter)) { //includes() returns true if a string includes a vowel and count plus
      count++
    }
}
return count;
}

const string = ("It was a nice day!");
//console.log(numberOfVowels(string));

// 3. Write a function that takes two arrays of numbers and returns a new array with all the elements from both arrays, without any duplicates.

const array1 = ["dog", "cat", "bird", "cat"];
const array2 = ["cat", "duck"];

function combineArrays(array1, array2) { 
  const result = [];
  const newArr = array1.concat(array2);

  // Compare the first and last items
  const firstItem = newArr[0];
  const lastItem = newArr[newArr.length - 1];

  if (firstItem !== lastItem) {
    result.push(firstItem, lastItem);
  } else {
    result.push(firstItem); // If they're the same, only push once
  }

  return result;
}


//console.log(combineArrays(array1, array2));

// 4. Write a function that takes an array of numbers and returns a new array with all the odd numbers in the original array
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers(array) {
  const odds = [];

  array.forEach(i => {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  });

  return odds;
}

const result = oddNumbers(num);
//console.log(result);


// 5. Write a function that takes an array of numbers and returns an array with all the even numbers in the original array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(array) {
  const even = [];

  array.forEach(i => {
    if (i % 2 === 0) {
      even.push(i);
    }
  });

  return even;
}

const final = evenNumbers(numbers);
//console.log(final);

// 6. Write a function that takes two strings and returns a string that contains the characters that appear in both strings.
const string1 = "Ja sam dosla";
const string2= "I ja sam";

function commonCharacters(string1, string2) {
  const result = [];
  const newStr = string1.concat(string2);
  const arr = newStr.split("");

  const firstItem = arr[0];
  const lastItem = arr[arr.length - 1];

  if (firstItem !== lastItem) {
    result.push(firstItem, lastItem);
  } else {
    result.push(firstItem); // If they're the same, only push once
  }

  return result;
}
//console.log(commonCharacters(string1, string2));
commonCharacters(string1, string2);
// 7. Write a function that takes an object and returns a new object with all the keys and values reversed (BONUS)
function reverseObject(object) {
  const reversed = {};
  for (let key in object) {
    const value = object[key];
   
    reversed[value] = key;
  }
  return reversed;
}

const original = { a: '1', b: '2', c: '3' };
//console.log(reverseObject(original));
reverseObject(original);
/* Bonuses */

// Palindrome checker: Write a program that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards).
function palindrome(string) {
  for (let left = 0, right = string.length -1 ; left < right; left ++ , right--) {
    if (string[left] !== string[right]) {
    return false; 
  }
}
return true;
}
//console.log(palindrome("racecar")); // true  

//Word count: Write a program that takes in a string and returns the number of words in the string.
function wordCount(string) {
  const words = string.split(" ");
  return words.length;
}


wordCount('I am a student'); // 4
console.log(wordCount("I am a student")); // 4
// Character count: Write a program that takes in a string and returns the frequency count of each character in the string.
function characterCount(string) {
  const count = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}
// Reverse string: Write a program that takes in a string and returns the string reversed.
function reverseString(string) {
  const sepString = string.split("");       //or return string.split("").reverse().join("");
  const reverse = sepString.reverse();       
  const joinAgain = reverse.join("");        
  return joinAgain;                          
}
//console.log(reverseString("Hello World!")); // !dlroW olleH
// Replace vowels: Write a program that takes in a string and replaces all vowels with a specified character.
function replaceVowels(string, character) {
  const vowels = ['a', 'e', 'i', 'o', 'u']; // Use an array, not an object
  let result = "";

  const stringLow = string.toLowerCase();
  for (let i = 0; i < stringLow.length; i++) {
    const currentChar = stringLow[i];
    if (vowels.includes(currentChar)) {
      result += character; 
    } else {
      result += string[i]; 
    }
  }
  return result;
}
// Longest word: Write a program that takes in a string and returns the longest word in the string.
function longestWord(string) {
  const wordsStr = string.split(" ");
  let result = "";

  for (let i = 0; i < wordsStr.length; i++) {
    if (wordsStr[i].length > result.length) {
       result = wordsStr[i]; // Replace vowel with given character
          } 
        }
        return result;
}
//console.log(longestWord("I am a student")); // student

// Text analyzer: Write a program that takes in a string and returns the number of characters, words, and sentences in the string.
function textAnalyzer(string) {
  const lettStr = string.split(""); // splits into characters
  const wordsStr = string.trim().split(" "); // splits into words by space
  const senStr = string.split(/[.!?]/).filter(s => s.trim().length > 0); // splits into sentences

  const count = {}; // this will store the results

  count.characters = lettStr.length;
  count.words = wordsStr.length;
  count.sentences = senStr.length;

  return count;
}

// Letter change: Write a program that takes in a string and changes each letter to the next letter in the alphabet.
function letterChange(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  const stringLow = string.toLowerCase();
  for (let i = 0; i < stringLow.length; i++) {
    const currentChar = stringLow[i];
    if (alphabet.includes(currentChar)) {
      let nextChar = alphabet[(alphabet.indexOf(currentChar) + 1) % 26]; // Wrap around using modulo
      result += nextChar; 
    } else {
      result += currentChar; // Add non-alphabetic characters (spaces, punctuation) unchanged
    }
  }
  return result;
}
