// Strings represent textual data
let rhyme = "she sells seashells at the seashores";
let message = 'jack and jill went up the hill';
let mixed = "She said that she didn't know anything";
let mixed2 = 'She said, "I do know everything"';

// Escape sequences allow us to tell the JavaScript
// that the single quote and double quote are not part of the
// programming
// To print: She said, "I don't know anything"
// the first type of escape sequence are for characters that
// have special meaning to JavaScript and we just want JavaScript
// treat it literally (i.e not part of the programming code)
console.log("She said, \"I don't know anything\""); // --> tells the JavaScript to treat the quotes as part of the string
// the full term "escaping the quote"
console.log('She said, "I don\'t know anything"');

// the second kind of escape sequences are for characters that we
// cannot type in using keyboard
console.log("Hello sir,\n how are you doing?");

// JavaScript gives a third way to do strings
// by using the backtick `
// jargon: template literals (aka template strings);

// spaces and newlines are respected within the template string
// all quotes are allowed
// you can write JavaScript inside

let amountOwned = 100;
let name = "Tan Ah Kow"
// let letter2 = "Dear sir\nwe want to write to you to remind you that your bill of " + amountOwned + 

let letter = `Dear ${name.toUpperCase()},
  We want to write to you to reminder that your bill of $${amountOwned}
  is overdue. 

  If you failed to pay on time, you must pay a 10% fine (which is ${amountOwned * 0.1})

  Sincerity,
  the Manager

  Our motto: "Treat all customers with the utmost sincerity"
`
console.log(letter);

