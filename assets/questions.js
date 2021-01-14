const countdown = document.getElementById('countdown');
let timeLeft = 120;
let countdownId;
const answerButtons = $("answerButtons")

// <h5>What is the correct syntax for referring to an external script called "xxx.js"?
//                         <!--1 <script href="xxx.js" 2. <script src="xxx.js"> 3. <script name="xxx.js"-->
//                         <h5></h5>
//                         <!--1. the head section 2. the body section 3. both the head and body section are correct-->

const myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<javascript>",
            c: "<scripting>",
            d: "<js>"
        },
        correctAnswer: "c"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "'this is a comment",
            b: "//this is a comment",
            c: "<!--this is a comment-->"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The <head> section",
            b: "The <body> section",
            c: "The <html> section",
            d: "Both the <head> and <body> are correct"
        },
        correctAnswer: "d"
    },
    // question: "Which tool can you use to ensure code quality?",
    // answers: {
    //     a: "Angular",
    //     b: "jQuery",
    //     c: "RequireJS",
    //     d: "ESLint"
    // },
    // correctAnswer: "d"
];


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
