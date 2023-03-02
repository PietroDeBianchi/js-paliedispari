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

//NEW CODE
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
//This line defines the function and declares that it takes in one parameter, input
function palindromeCheck(input){
// This line declares a new variable called 'textInput' and initializes it to an empty string. This variable will be used to store the reversed string.
  let textInput = '';
// This line declares a new variable called 'i' and initializes it to the index of the last character in the input string
  let i = input.length - 1;
// while loop that continues as long as i is greater than or equal to 0. During each iteration of the loop, 
// it takes the character at index i of the input string and appends it to the end of the textInput string. 
// It then decrements i by 1, so that the next iteration of the loop will get the previous character in the input string.
  while (i >= 0) {
    textInput += input[i];
    i--;
  }
//contain the reversed version of the input string.
  return textInput;
}
//REMEBER: let "..." = ..." exist only inside the function !