let x = 42;
x++; // when the ++ by itself on one line, no confusion
     // post-increment (aka postfix)
console.log("x =>", x);

let c = 30;
++c;  // pre-increment (aka prefix)
console.log("c =>", c);

let d = 10;
console.log("d=>", d++); // or if the ++ is after the variable
                         // it increases by one AFTER the line has executed
console.log("d after d++ =>", d);

let z = 9
console.log(++z); // preincrement will happen before the instruction is executed