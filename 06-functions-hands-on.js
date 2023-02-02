// takes two integer parameters
function multiplyTwo(x, y) {
    let result = x * y;
    return result;
}

// parameter names are arbitary (JavaScript does not know the speed and time)
// most programming lang don't have units - km, min, km/h 
// speed is km/h and time is hours
function calculateDistance(speed, time) {
    return speed * time;
}

// calculate perimeter of a rectangle
function calculatePerimeter(width, height) {
    return (width + height) * 2;
}

console.log(multiplyTwo(10, 20));
console.log(calculateDistance(25, 2));
console.log(calculatePerimeter(5,10));