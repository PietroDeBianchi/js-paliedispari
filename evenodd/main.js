// Function to generate a random number between min and max (inclusive)
function generateNumber(min, max) {
  const numberRandom = Math.floor((Math.random() * (max - min + 1)) + min);
  return numberRandom;
};
// Function to check if a number is: even = true, not even = false
function isEven(numero) {
  return numero % 2 === 0;
}

// Prompt the user for  even or odd selection
const userChoice = prompt("Choose even or odd");
// Prompt the user for number selection and parseInt to generate a number from a string
const userNumber = parseInt(prompt("Enter a number between 1 and 5:"));
// Generate a random number for the computer
const computerNumber = generateNumber(1, 5);
// Add the two numbers together
const sum = userNumber + computerNumber;
// Determine if the sum is even or odd
const sumIsEven = isEven(sum);
// const to determine who won
let winner = document.getElementById('winnerGame');
// if (userchoice is even and the sum cumputerNum + userNum is even) o (userchoice is odd and the sum cumputerNum + userNum is not even)
// sumIsEven = true / !sumIsEven = false
if ((userChoice === "even" && sumIsEven) || (userChoice === "odd" && !sumIsEven)) {
  winner.textContent = "Congrats! You Win!";
} else {
  winner.textContent = "Sorry!The Computer Win!";
}

// Display in the log the results
console.log(`You chose ${userChoice} and ${userNumber}.`);
console.log(`The computer chose ${computerNumber}.`);
console.log(`The sum is ${sum}.`);
