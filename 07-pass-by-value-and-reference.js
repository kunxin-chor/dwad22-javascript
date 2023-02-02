// the parameters of a function is local to its's scope
// i.e the parameters are defined within the function's scope
function foobar(x) {
    x = x + 1;
}

function happy() {
    x = x + 1;
    // return undefined; <-- all functions implictly return undefined
    //                       if there is no explict return
}

let x = 10;
foobar(x); // x is being passed by value
           // because we are passing a primitive value over
           
console.log("x=", x);
console.log(happy());
console.log("after happy(), x=", x);

// Pass by reference
let fruits = ["apples", "bananas", "oranges"];

function addFruits(fruits) {
    fruits.push("durians");
}

addFruits(fruits);
console.log(fruits);