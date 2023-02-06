let sentence = "Jack and Jill went up the hill";
console.log("sentence =>", sentence);

// it is possible to access an index of a sentence
// the first character in the string is index 0
console.log("sentence[3] =>", sentence[3]);

// it is also possible to extract a segment of a string via slicing
// the function name is "slice" (string manipulation function)
console.log("sentence.slice(0,3) =>", sentence.slice(0, 3)) // -> returns index 0 to index 3 (the final index is not included)
// all string manipulation functions does not change the original string
console.log("sentence after the slice =>", sentence);