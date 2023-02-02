// Arrays are reference

// For strings, numbers and booleans
let m = 4;
let z = m;
z = z + 1;
console.log(m); // => will be 4 because we only assigned the VALUE
                // from m to z.

let fruits = ["apples", "oranges", "bananas"];
let another = fruits;
another[0] = "durians";
console.log("fruits =", fruits);