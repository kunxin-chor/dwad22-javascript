const prompt = require('prompt-sync')();
// 0123456789
// YYYY-MM-DD
let date = prompt("Please enter date in YYYY-MM-DD: ");
let year = date.slice(0, 4);
let month = date.slice(5,7);
let day = date.slice(8); // implict to be slicing from 8 to 10
// let day = date.slice(-2);
console.log("year =", year);
console.log("month =", month);
console.log("day =", day);