const countdown = document.getElementById('countdown');
let timeLeft = 120;
let countdownId;

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
    if (seconds < 10) { seconds = "0" + seconds; }
    countdown.textContent = mins + ":" + seconds;
}
updateTimer()
countdownId = startCountdown()

function gameEnd() {

    if (userFinish) {
        clearInterval(countdownId)
    }
}
