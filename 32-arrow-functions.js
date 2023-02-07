// Arrow functions are a different way
// to define a function
// First, syntax is shorter and streamlined
// Second, it's prefered for certain kind of callback functions
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

// an arrow function is annoymous
// so the only way to refer to them
// later is to store them in a variable
let s = (num1, num2) => {
    return num1 + num2;
}

// if an arrow function only has have one line
// and that line is a return, you can
// remove the curly braces and the return
let s2 = (num1, num2) =>  num1 + num2;

// if you only have parameter, you don't need the
// ( ) around the parameter

function calculateAreaOfCircle(radius) {
    return 22/7 * radius ** 2;
}

// let area = (radius) => {
//     return 22/7 * radius ** 2;
// }

// let area = (radius) => 22/7 * radius ** 2;

// let area = radius => 22/7*radius**2;

let area = r => 22/7 * r ** 2;

// we use const usually for arrow functions
// because we intend reassign it
const a = r => 22/7 * r ** 2;

console.log(s(2,3));
console.log(s2(4,8));

function drawSquare(width) {
    for (let i = 0; i < width; i++) {
        console.log("******");
    }
}

let d = (width) => {
    for (let i = 0; i < width; i++) {
        console.log("******");
    }
}