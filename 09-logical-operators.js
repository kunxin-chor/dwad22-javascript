const prompt = require('prompt-sync')();

// logical operators (most commonly used)
// && -- and
// || -- or
// ! - invert (negate)

console.log("true && true =>", true && true);
console.log("true || true =>", true || true);
console.log("true || false =>", true || false);
console.log("false || true =>", false || true);

// truthy and falsy
// there values that are eqv to true or false
if (NaN) {
    console.log("NaN is truthy");
} else {
    console.log("NaN is falsly");
}

if (!null) {
    console.log("null is falsly");
}

if (!"") {
    console.log("empty string is falsly");
}

if ('') {
    console.lg('empty string is falsly');
}

// Number 0 is considered as falsly
if (!0) {
    console.log("0 is considered as falsly")
}

if ("0") {
    console.log("0 in a string is considered as truthy");
}

// ask the user for a number
// check if the number is a valid number 
// let number = parseInt(prompt("Enter a number: "));
// console.log(number);
// if (number != 0 && !number) {
//     console.log("Please enter a valid number");
// }

// to detect if the user has entered anything
// let firstName = prompt("Please enter the first name:")
// if (!firstName) {
//     console.log("Please don't leave your first name blank");
// }

// most of the falsy values are eqv. to false
console.log("null && true", null && true);
console.log("undefined && true", undefined && true);
console.log("0 && true", 0 && true);
console.log("true && null", true && null);
console.log("2 && null", 2 && null);
console.log("null && 2", null && 2);
console.log("NaN && 2", NaN && 2);
console.log("2 && NaN", 2 && NaN);
console.log("2 && 3", 2 && 3);
console.log("3 && 2", 3 && 2);

// logical OR when it works with falsy value
// bascially it will take the truthy value

// remember if we use || with true or false
// we evaluate to "true"
console.log("2 || null", 2 || null);
// console.log(2 || false)
// console.log(2);
console.log("null || 2", null || 2);
// if falsly || falsly, take the last falsy value
console.log("NaN || null", NaN || null);
// if truthy || truthy, take the first truthy value
console.log("2 || 3 =>", 2 || 3);

// we often uses the || to get a default value
// ask the person for their name, if they never
// provide any name, set it to 'annoymous'
let name = prompt("Please enter your name");
// if (!name) {
//     name = "Annoymous";
// }
// if name is "" we want to reassign "annoymous" to the name variable
name = name || "Annoymous";

// => name = "" || "Annoymous"
// since falsly || truthy or truthy || falsy
// will evalulate to the truthy value, therefore
// => name = "Annoymous"
console.log("Welcome", name);