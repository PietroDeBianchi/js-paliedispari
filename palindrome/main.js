// // program to check if the string is palindrome or not
// function checkPalindrome(stringer) {

// // convert string to an array so the word became a sum of single letters
// const arrayValues = stringer.split('');
// // reverse the array values...reverse the letter's direction
// const reverseArrayValues = arrayValues.reverse();
// // convert array to string so transform the revers-array in a new string
// const reverseString = reverseArrayValues.join('');
// // display the content inside the <p> element
// let palindromeDisplay = document.getElementById('palindrome')

// // if function to check if is a palindrome: 'string' and 'reversString' are two string
//   if(stringer == reverseString) {
//     palindromeDisplay.textContent = `It is a palindrome`;
//   }
//   else {
//     palindromeDisplay.textContent = `It is not a palindrome`;
//   }

// };

// //take input from the prompt
// const string = prompt('Enter a word: ');
// // run the function by add what the user's write in the prompt inside our function and check the reverse word of the input
// checkPalindrome(string);

let word = prompt('Enter a word: ');
//refers to the function "palindromeCheck for the let word = prompt "
let wordReverse = palindromeCheck(word);
// display the result inside the <p> tag
let palindromeDisplay = document.getElementById('palindrome')
//condition for palindrome 
if(word == wordReverse){
    console.log(`It is a palindrome`);
    palindromeDisplay.textContent = `It is a palindrome`;
  } else {
    console.log(`It is not a palindrome`);
    palindromeDisplay.textContent = `It is not a palindrome`;
}
// our function ! let "..." = ..." exist only inside the function
function palindromeCheck(input){
  let textInput = '';

  let i = input.length - 1;

  while (i >= 0) {
    textInput += input[i];
    i--;
  }

  return textInput;
}