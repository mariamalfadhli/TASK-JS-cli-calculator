const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);
    
let result = 0
let firstNum = prompt("Please enter the first number:");
//if (firstNum==){
  //  firstNum = prompt("Please enter the first number again:")}

let secondNum = prompt("Please enter the second number:");

//if(){
  //  secondNum = prompt("Please enter the second number again:")}

let operation = prompt("Please choose the operation (+, -, /, *) ");

//if ((operation =! '+') && (operation =! '-') && (operation =! '*') && (operation =! '/')){
//operation = prompt("Please enter the operation again:")}


if (operation == '+'){result = (firstNum + secondNum)}
else if (operation == '-'){result = (firstNum - secondNum)}
else if (operation == '*'){result = (firstNum * secondNum)}
else if (operation == '/'){result = (firstNum / secondNum)}

console.log(`${firstNum} ${operation} ${secondNum} = ${result}`);