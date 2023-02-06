// model the problem
let money = 100;
let distance = 0;
const fare = 3.50;
const threshold = 10000;
const shorterDistance = 400;
const normalDistance = 500;

while (money >= fare) {
    money -= fare;
    if (distance < threshold) {
        distance += normalDistance; // distance = distance + 500
    } else {
        console.log("paying 3.5 for 400m")
        distance += shorterDistance;
    }
    // distance = distance + (distance < threshold ? normalDistance : shorterDistance);
    // distance < threshold ? distance += normalDistance : distance += shorterDistance;
    
    
    console.log("money left =", money);
    console.log("distance travelled =", distance);
    console.log("-------------");
}

