const questions = "./questions.html"
var startQuiz = document.getElementsByClassName("start");
var startButton = document.getElementById("start")

let countdownId;
// prepend a number to timer. add event listener to startCountdown on click
//startQuiz.


$(".submit").on("click", function () {
    $(location).attr('href', questions)
});

function startGame() {
}

