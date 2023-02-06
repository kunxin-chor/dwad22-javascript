// assuming that A has a loan of 5000
// and the interest rate monthly is 10%
// if A pays back 200 per month
// how many months will it take A to pay back the loan

// 1) model the problem
// - using variables to represent the problem and the answer
// all programs are basically "chunks" of the following:
// - sequence of instructions
// - if/else (branching)
// - loops (while)
// - variables (assignment, reassignment)
// - operators
// - function calls
let loanAmount = 5000;
let interestRate = 0.0125;  // i.e 1.25 percent
let repayment = 200;

let months = 0;

// brute-force and see the pattern

// MONTH 1
while (loanAmount > 0) {
    loanAmount = loanAmount * (1 + interestRate);
    loanAmount = loanAmount - repayment;
    months = months + 1;
    console.log("Amount left to pay after month", months, "=", loanAmount);
}
console.log("Number of months to repay =", months);