const prompt=require('prompt-sync')();
let x = 0;
while (x < 10) {
    console.log(x);
    if (x==5) {
        break; // break only works for for and while loops
               // it moves the red arrow after the
               // the while loop it is in
    }
    x++;
}
console.log("The loop has stopped");

// let a = 3;
// let b = 4;
// while (a > 0) {
//     while (b > 0 ) {
//         if (b==3){
//             break;
//         }
//         b--;
//     }
//     console.log("Outside of b")
//     a--;
// }
let number = 0;

// keep repeating
while (true) {
    // get the number from the user
    number = Number(prompt("Please enter a positive number: "));
    // if the number is greater than 0, then stop asking the user
    if (number > 0) {
        break;
    }
}
console.log("Your number is", number);