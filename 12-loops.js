const prompt = require('prompt-sync')();

// DETERMINISTIC LOOP
let x = 0;
let y = parseInt(prompt("How many times to repeat"));
// the condition (within the parthenesis)
// must evaluate to a truthy or falsy value
while (x <y) {
    console.log(x);
    x++;
    console.log("after x++ =>", x);
}
console.log("End of program");