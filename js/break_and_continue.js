"use strict"


do {

    let userInput = prompt ("Please enter an odd number between 1 and 50");

    if (userInput % 2 === 0){
        alert("Your input was even, please try again.");
    } else if (userInput < 1) {
        alert("Your user input is less than 1");
    } else if(userInput > 50){
        alert("Your input is greater than 50. Please try again");
    } else {
        alert("Valid input. Thank you");
        break;
    }
} while(true)


let userInput = prompt ("Please enter an odd number between 1 and 50");
console.log = prompt("Please enter an odd number between 1 and 50");

for(let i = 1; i <= 50; i+=2) {
    if (userInput == i) {
        console.log("Yikes! skipping number " + userInput);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
