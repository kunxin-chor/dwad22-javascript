// everything about strings is almost the same for arrays:
let fruits = ['apples', 'bananas', 'elderberries', 'strawberries', 'durians'];

// we can access array by index
console.log(`fruits[1] =>`, fruits[1]);

// we can also slice array
// the original array is NOT changed
console.log(fruits.slice(1,3));

// however, MOST functions will change the array
// ARRAYS are mutable, STRINGS ARE immutable
// DO NOT REASSIGN THE RESULT OF PUSH TO THE ARRAY AGAIN
fruits.push("mangosteen");
console.log(`After fruits.push("mangosteen") ->`, fruits);

// indexOf and includes still work
console.log("Does fruits have mangosteen?", fruits.includes("mangosteen"));
console.log("Which index in fruits array is mangosteen", fruits.indexOf("mangosteen"));

// splice
// it has remove items from an array
// it can also replace items in an array
let names = ["Adam", "Ben", "Cindy", "David", "Ethan", "Frank", "Gary"];

// we can use splice to remove elements from an array
names.splice(4, 1);  // first parameter -- where to start deleting
                     // second parameter -- how many to delete
console.log("Names after names.splcie(4,1) =>", names);

names.splice(2,1, "Candace");  // start replacing at index 2 for 1 element, and replace with Candace
console.log(names);

// the reverse of split is join
let products = "hammer,anvil,nails,chainsaw";
let productsAsArray = products.split(',');
console.log(productsAsArray);
console.log(productsAsArray.join("|"));
