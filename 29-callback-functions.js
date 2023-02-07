function foobar() {
    console.log("WAKE UP!!!");
}



// setTimeout takes two arguments
// 1st parameter: a reference to a function (aka handler)
// 2nd parameter: how long to set the 'alarm clock' for in milliseconds
// example of a callback function
setTimeout(foobar, 2000);

// setInterval never ends you explictly tell it to
// it will return a unique number (aka ID) that identifies the interval (aka timer)
let intervalId = setInterval(foobar, 1000);

setTimeout(stopInterval, 5000);

function stopInterval() {
    console.log("Stopping the interval");
    // clearInterval stops an interval
    // the parameter is the ID of the interval that we want to stop
    clearInterval(intervalId);
}


