// JavaScript has functions that works on strings
// string manipulation/transformation
// strings cannot be changed therefore
// any functions called on it only change
// a copy of the a string
// because strings are "immutable"
let m = "She sells seashells at the seashore";
console.log("m.toUpperCase() =>", m.toUpperCase());
console.log("m =", m);

// if we want to 'change' a string
let a ="apples"; 
//if we want a to store apples in uppercase
a = a.toUpperCase(); // this is not same as changing an existing string
// it's a reassignment

console.log("m.toLowerCase() =>", m.toLowerCase());

// replace with "seashells" with pearls
console.log(`m.replace("seashells", "pearls") =>`, m.replace("seashells", "pearls"));

// Second kind of functions that tell you some information about the string
// indexOf tells which index a sub-string is within the entire sting
let h = "hay hay hay needle hay hay hay hay";
console.log("Index of needle =", h.indexOf("needle")); // tells us the index where the sub-string "needle" happens

let h2 = "hay needle hay needle hay hay";
// if there multiple 'needles' (matches), returns the first one
console.log("Index of needle =", h2.indexOf("needle"));
console.log(`"needle".indexOf("needle")=>`, "needle".indexOf("needle"));

// if no matches are found, then it returns -1
console.log("Index of apple in h2 =>", h2.indexOf("apples"));

// check if a substring exists
console.log(`h2.includes("needle") =>`, h2.includes("needle"));

// split is not a string transformation 
// it returns you an array of substrings
// and you indicate what the seperator is
let fruits = "apples,oranges,durians,cherries";
let arrayOfFruits = fruits.split(","); // the seperator between each item is comma
console.log(arrayOfFruits);

// consider the YYYY-MM-DD
let date = "2023-02-06";
let chunks = date.split("-");
let year = chunks[0];
let month = chunks[1];
let day = chunks[2]
console.log(year, month, day);