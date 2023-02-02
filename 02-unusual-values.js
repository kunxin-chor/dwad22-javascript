// undefined
let x;
console.log("x =", x);

let obj = { 
    "a": 1,
    "b": 2
}
// if we want try access a undefined key on object, we can undefined as the value
// (that is, if the key does not exist in the object)
console.log("obj.c =>", obj.c);

// NaN = Not a Number
console.log('"One Hundred"/10 =>', "one hundred"/10);
console.log(2 +3 + "abc"/2 + 4);
// => 5 + "abc"/2 + 4
// => 5 + NaN + 4
// => NaN + 4
// => NaN

// Inf
console.log("3/0 =>", 3/0);
console.log(3/0 + 5 / 2 * 10);
console.log(Infinity + NaN);

// null
// does not exist
// it is always assigned by a programmer
let totalPrice = null;