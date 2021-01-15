const countdown = document.getElementById('countdown');
let timeLeft = 120;
let countdownId;
const answerButtons = $(".page-item");
var currentIndex = 0;

// <h5>What is the correct syntax for referring to an external script called "xxx.js"?
//                         <!--1 <script href="xxx.js" 2. <script src="xxx.js"> 3. <script name="xxx.js"-->
//                  
const questionHeader = $(".questionHeader");

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
        correctAnswer: "c"
    },
    {
        title: "Question 2:",
        question: "How can you add a comment in a JavaScript?",
        answers: [
            "'this is a comment",
            "//this is a comment",
            "<!--this is a comment-->",
            "gergerg"
        ],
        correctAnswer: "c"
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

//pseudo code $ infront to know jquery obj
// last  q bring to create highscore. deduct 25 seconds per wrong answer.
// set / push question/answer objects[] 
function qGenerator() {
    var currentQ = myQuestions[currentIndex];
    console.log(answerButtons);
    answerButtons.each(function (i, li) {
        const $li = $(li)
        // console.log(currentQ.answers[i])
        console.log($li)
        $li.find("a").text(currentQ.answers[i])
    });
    questionHeader.text(currentQ.question);

};

answerButtons.on("click", function () {
    currentIndex++;
    qGenerator();
});

//just placeholder idea for time reduction on wrong answer
function wrongReduce() {
    (timeLeft - (15 + seconds))
};

//set local storage for highscore
qGenerator();
// set highscores on said page

// not important work on progress bar
