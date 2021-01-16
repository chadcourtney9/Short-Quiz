const countdown = document.getElementById('countdown');
let timeLeft = 120;
let countdownId;
const answerButtons = $(".page-item");
var currentIndex = 0;
const questionHeader = $(".questionHeader");
const progressBar = document.getElementsByClassName('.progress-bar');
const mainPg = "./index.html";


const myQuestions = [
    {
        title: "Question 1:",
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<javascript>",
            "<scripting>",
            "<js>"
        ],
        correctAnswer: "<script>"
    },
    {
        title: "Question 2:",
        question: "How can you add a comment in a JavaScript?",
        answers: [
            "'this is a comment",
            "//this is a comment",
            "<!--this is a comment-->",
            "/* this is a comment"
        ],
        correctAnswer: "//this is a comment"
    },
    {
        title: "Question 3:",
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            "The <head> section",
            "The <body> section",
            "The <html> section",
            "Both the <head> and <body> are correct"
        ],
        correctAnswer: "Both the <head> and <body> are correct"
    },
    {
        title: "Questions 4:",
        question: "Which tool can you use to ensure code quality?",
        answers: [
            "Angular",
            "jQuery",
            "RequireJS",
            "ESLint"
        ],
        correctAnswer: "ESLint"
    }];

function startCountdown() {
    return setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdownId)
            $(location).attr('href', mainPg)
            alert(" TIME OUT!");
        }
        updateTimer();
    }, 1000)
};

function updateTimer() {
    let mins = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) { seconds = "0" + seconds; }
    countdown.textContent = mins + ":" + seconds;
}
updateTimer()
countdownId = startCountdown()


// last  q bring to create highscore. deduct 25 seconds per wrong answer.
// set / push question/answer
function qGenerator() {
    var currentQ = myQuestions[currentIndex];
    answerButtons.each(function (i, li) {
        const $li = $(li)
        $li.find("a").text(currentQ.answers[i])
    });
    questionHeader.text(currentQ.question);
    // if (answer.correctAnswer) {
    //     $li.addEventListener("click", selectAnswer)
    // };
};

answerButtons.on("click", function (li) {
    // const $value = $(this).data("value");
    var currentQ = myQuestions[currentIndex];
    const $li = $(li)
    if ($li === myQuestions.correctAnswer) alert("well done");

    // else {
    //     (startCountdown - 45000)
    // }

    currentIndex++;
    qGenerator();
});

qGenerator();

//set local storage for highscore

// set highscores on said page

// not important work on progress bar


//note from tutor session pseudo code $ infront to know jquery obj
