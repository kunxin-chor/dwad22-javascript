const prompt = require('prompt-sync')();

let totalBill = parseFloat(prompt("Please enter the bill: "));
while (totalBill <=0) {
    console.log("The total bill must be greater than 0");
    totalBill = parseFloat(prompt("Please enter the bill: "));
}

let gst = parseFloat(prompt("Please enter the GST"));
// what I want is: gst >= 0 && gst <= 1.0
while (gst < 0 || gst > 1.0) {
    console.log("The GST must be between 0.0 to 1.0")
    gst = parseFloat(prompt("Please ente the GST"));
}

let bill = totalBill * (1.0 + gst);
console.log("Bill = ", bill);

// let totalBill = null;
// while (true) {
//     totalBill = Number(prompt("Enter the bill: "));
//     if (totalBill > 0) {
//         break;
//     }
//     console.log("The bill must be greater than 0");
// }
// let gst = null;
// while (true) {
//     gst = Number(prompt("Please enter the GST percentage over 100: "));
//     if (gst >= 0 && gst <= 1.0) {
//         break;
//     }
//     console.log("GST percentage over 100 must between to 0.0 to 1.0");
// }
// const netBill = totalBill * (1 + gst);
// console.log("Bill payable with GST=", netBill);