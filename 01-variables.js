// We can use `let` to create variable
let secretOfLife = 42;

// We can also use `const`
// `const` stands for constant -- "not changing"
// HOWEVER more accurate, it  means it cannot to be reassigned to
// const pi = 3.14;  ==> ERROR! pi can only refer to 3.14

// HOWEVER, const does not cannot change
const fruits = ["apples", "oranges", "durains"];
fruits.push("rambutans");
console.log(fruits);  // => we are still possible affect change array
                      // despite it being const

// fruits = ["a", "b", "c"];  error! const will prevent reassignment to the same variable

// When to use const when to use let
// From a JavaScript context  -- we should use const whenever we can
// As long we are not going to reassign to the variable, use const

// From computer science persceptive: Const should be reserved values
// that conceptually does not change
const GST = 0.07;

// DO NOT USE `var`
// var is function-scoped (i.e it's considered to global within the function it is declared in)
function foobar() {
    console.log("x => ", x);
    var x = 42;  // var is function scoped. It's available within the function
    if (true) {
        var  y = 33;
    }
    console.log("y =", y);

}
foobar();