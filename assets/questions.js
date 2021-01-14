const countdown = document.getElementById('countdown');
let timeLeft = 120;
let countdownId;
const answerButtons = $("answerButtons");

// <h5>What is the correct syntax for referring to an external script called "xxx.js"?
//                         <!--1 <script href="xxx.js" 2. <script src="xxx.js"> 3. <script name="xxx.js"-->
//                  
const qHeader = ".questionHeader";

const myQuestions = [
    {
        title: "Question 1:",
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
        title: "Question 2:",
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "'this is a comment",
            b: "//this is a comment",
            c: "<!--this is a comment-->"
        },
        correctAnswer: "c"
    },
    {
        title: "Question 3:",
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
};

function updateTimer() {
    let mins = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) { seconds = "0" + seconds; }
    countdown.textContent = mins + ":" + seconds;
}
updateTimer()
countdownId = startCountdown()

//pseudo code

// set / push question/answer objects[] 
function qGen() {
};

function nextQBTN() {
    $(".btn").on("click", function () {
    }
    )
};
//just placeholder idea for time reduction on wrong answer
function wrongReduce() {
    (timeLeft - (15 + seconds))
};

//set local storage for highscore

// set highscores on said page

// not important work on progress bar
