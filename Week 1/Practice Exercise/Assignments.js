// 1. Create a counter in Javascript (counts down from 30 to 0)
var countsDown = 30;
function startCountdown(){
    var intervalId = setInterval(function(){
        console.log(countsDown);
        countsDown--;
        if(countsDown < 0){
            clearInterval(intervalId);
            console.log("Countdown finished!");   
        } 
    },1000);
}
startCountdown()

// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
function measureDelay(){
    var startTime = performance.now();
    setTimeout(function(){
        var endTime = performance.now();
        var delay = endTime - startTime;
        console.log("Time Delay(ms): ",delay);
    },1000);
}
measureDelay()

// 3. Create a terminal clock(HH:MM:SS)
function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    process.stdout.write('\x1Bc');
    let now = new Date();    
    process.stdout.write(formatTime(now) + '\n');
}
setInterval(updateClock, 1000);
