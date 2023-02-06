// let n = Math.floor(Math.random() * 6 + 1);
// console.log("n =", n);
// while (n!=3) {
//     console.log("Reroll");
//     n = Math.floor(Math.random() * 6) + 1;
//     console.log("After reroll n =", n);
// }

let n = null;  
do {
    n = Math.floor(Math.random() * 6) +1
} while (n!=3);

console.log(n);
