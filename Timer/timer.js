const startButton = document.getElementById("startTimer");
const pauseButton = document.getElementById("pauseTimer");
const resetButton = document.getElementById("resetTimer");
const timeDiv = document.getElementById("stopwatch");
let startTime = true;
let sec = 0;
let min = 0;
let hr = 0;

sec = sec + 1;

startButton.addEventListener("click", function () {
    if (startTime) {
        startTime = false;
        startTimer();
    }
});

pauseButton.addEventListener("click", function () {
    if (!startTime) {
        startTime = true;
    }
});

resetButton.addEventListener("click", function () {
    timeDiv.innerHTML = "00:00:00";
});

function startTimer() {
    if (!startTime) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;

        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            sec = 0;
            min = 0;
        }

        if (sec < 10 || sec === 10) {
            sec = "0" + sec;
        }

        if (min < 10 || min === 10) {
            min = "0" + min;
        }
        if (hr < 10 || hr === 10) {
            hr = "0" + hr;
        }

        timeDiv.innerHTML = hr + ":" + min + ":" + sec;
        setTimeout(() => {
            startTimer();
        }, 1000);
    }
}
