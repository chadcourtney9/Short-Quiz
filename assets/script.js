var startQuiz = document.getElementsByClassName("start");
const countdown = document.getElementById('countdown');
let timeLeft = 120;
var startButton = document.getElementById("start")

let countdownId;
// prepend a number to timer. add event listener to startCountdown on click
//startQuiz.


function startGame() {
}

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
