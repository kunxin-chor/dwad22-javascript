const prompt = require('prompt-sync')();
let x = 0;
while (x < 10) {
    console.log(x);
    x++; //  x = x + 1
}

console.log("--------------");

// the for loop has three parts to it
// 1. "let i=0" => first is the initializer
// 2. "i < 10" => loop condition; if true, the loop will contiune
// 3. { ... } => loop body
// 4. i++ => sentinel variable changes
// ... go back to step 2
for (let i =0; i < 10; i++) {
    console.log(i);
}

// possible to init more than one variable
// and to increment more than one variable
// (using commas)
for (let i =0, j=5; i < 10; i++, j++) {
    console.log(i,j);
}

// the below won't work because
// a variable that is created in a loop
// is local to that loop and not usable outside of it
// console.log("i == ", i); 

let s=0;
for (; s<=0; s=prompt("Enter a number")) {
    console.log("Make sure the number is > 0");
}