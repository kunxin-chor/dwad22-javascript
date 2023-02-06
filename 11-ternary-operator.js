// ternary operator is a shortcut for:
let n = 8;
// if (n==8) {
//     console.log("Lucky");
// } else {
//     console.log("Normal number");
// }

console.log( n==8 ? "Lucky" : "Normal Number");
// => console.log(8==8 ? "Lucky" : "Normal Number");
// => console.log(true ? "Lucky" : "Normal Number");
// => console.log("Lucky")
console.log( 13==8 ? "Lucky" : "Normal Number");
// => console.log( false ? "Lucky" : "Normal Number")
// => console.log("Normal Number")
console.log( n==8 ? "Lucky" : n==13 ? "Unlucky" : "Normal Number");