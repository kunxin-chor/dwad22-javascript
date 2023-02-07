let funcs = [];
let fruits = ['apples', 'oranges', 'papayas', 'watermelon', 'durian'];
for (let f of fruits) {
    // create an annoymous function and add it to the
    // array
    funcs.push(function(){
        console.log(f);
    })
}
funcs[2]();
console.dir(funcs[0]);