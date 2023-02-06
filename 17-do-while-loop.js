const prompt = require('prompt-sync')();
let x = 0;

do {
  console.log(x);
  x = x + 1;
  

} while (x < 10);
// for a do-while loop, the condition is check
// at the END of the loop

let i = 0;
do {
    i = Number(prompt("Enter a positive number"));
} while (i <= 0);