// function countdown(elementName, minutes, seconds) {
//     var element, endTime, hours, mins, msLeft, time;

//     function twoDigits(n) {
//         return n <= 9 ? "0" + n : n;
//     }

//     function updateTimer() {
//         msLeft = endTime - +new Date();
//         if (msLeft < 1000) {
//             element.innerHTML = "Time is up!";
//         } else {
//             time = new Date(msLeft);
//             hours = time.getUTCHours();
//             mins = time.getUTCMinutes();
//             element.innerHTML =
//                 (hours ? hours + ":" + twoDigits(mins) : mins) +
//                 ":" +
//                 twoDigits(time.getUTCSeconds());
//             setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
//         }
//     }

//     element = document.getElementById(elementName);
//     endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
//     updateTimer();
// }

// countdown("countdown", 2, 0);
var startQuiz = document.getElementsByClassName("start");
const countdown = document.getElementById('countdown');
let timeLeft = 120;

let countdownId;
// prepend a number to timer. add event listener to startCountdown on click
//startQuiz.

function startCountdown() {
    return setInterval(function () {
        timeLeft--;
        if (timeLeft < 1) {
            clearInterval(countdownId)
        }
        updateTimer();
    }, 1000)
}

function updateTimer() {
    let mins = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    countdown.textContent = mins + ":" + seconds;
}

function gameEnd() {

    if (userFinish) {
        clearInterval(countdownId)
    }
}



updateTimer()
countdownId = startCountdown()
