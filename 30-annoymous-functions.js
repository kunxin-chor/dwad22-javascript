// this will WORK because a typical function
// defintion (this means, a function with a name)
// is hoisted (ie, they are registered first before)
// any code is ran
foo();

// foobar is a variable, it's only defined
// at a line after the next line so it's not
// availabe yet
foobar();

// annoymous functions are
// functions with no names
// annoymous functions are not hoisted
let foobar = function () {
    console.log("foobar");
}
foobar();

// this is hoisted; you may call them
// from anywhere
function foo() {
    console.log("foo");    
}
