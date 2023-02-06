function foobar() {
    console.log("FOOBAR!!!!!");
    return true;
}

// the programming langauge takes shortcut
// if we do false && true && true ...
// since false && anything will be false
// JavaScript will just evaluate the first pair of &&

// console.log('true && foobar()=>', true && foobar());
// console.log(true && true);
// console.log(true);
// console.log(false && true && foobar());
console.log('false && foobar() =>', false && foobar());
console.log("-----");
console.log('foobar() && false =>', foobar() && false);
console.log("-------");
// it's also possible for an || to do a short circuit
function foo() {
    console.log("foo");
    return true;
}

function bar() {
    console.log("bar");
    return true;
}

console.log("foo() || bar() =>", foo() || bar());
console.log("-------");
console.log("false || false || true || foo() =>", false || false || true || foo() );
