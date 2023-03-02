// program to check if the string is palindrome or not
function checkPalindrome(stringer) {

// convert string to an array so the word became a sum of single letters
const arrayValues = stringer.split('');
// reverse the array values...reverse the letter's direction
const reverseArrayValues = arrayValues.reverse();
// convert array to string so transform the revers-array in a new string
const reverseString = reverseArrayValues.join('');
// display the content inside the <p> element
let palindromeDisplay = document.getElementById('palindrome')

// if function to check if is a palindrome: 'string' and 'reversString' are two string
  if(stringer == reverseString) {
    palindromeDisplay.textContent = `It is a palindrome`;
  }
  else {
    palindromeDisplay.textContent = `It is not a palindrome`;
  }

};

//take input from the prompt
const string = prompt('Enter a word: ');
// run the function
checkPalindrome(string);