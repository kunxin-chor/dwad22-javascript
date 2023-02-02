// before using prompt, we have to `yarn add prompt sync`
// in the terminal (make sure the current working directory is
// the one with all the JavaScript files)
// including additional functions from a module
// a module is essentially a JavaScript file which we can
// import in new functions
const prompt = require("prompt-sync")();

let weight = parseFloat(prompt("Please enter your weight:"));
let height = parseFloat(prompt("Please enter your height:"));

const bmi = weight/height ** 2;
console.log("BMI = ", bmi);