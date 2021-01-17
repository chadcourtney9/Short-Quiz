$(document).ready(function () {
    const countdown = document.getElementById('countdown');
    let timeLeft = 60;
    let countdownId;
    const $answerButtons = $(".page-item");
    var currentIndex = 0;
    const $questionHeader = $(".questionHeader");
    const $mainPg = "./index.html";
    const $highscorePg = "./highscores.html";
    var hScores = [];
    var newScore;
    var fScore;
    const $score = $(".score")

    // questions answers and correct answers.
    const myQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: [
                "<script>",
                "<javascript>",
                "<scripting>",
                "<js>"
            ],
            correctAnswer: "1"
        },
        {
            question: "How can you add a comment in a JavaScript?",
            answers: [
                "'this is a comment",
                "//this is a comment",
                "/* this is a comment*/",
                "Both // and /*"
            ],
            correctAnswer: "4"
        },
        {
            question: "Where is the correct place to insert a JavaScript?",
            answers: [
                "The <head> section",
                "The <body> section",
                "The <html> section",
                "Both the <head> and <body> are correct"
            ],
            correctAnswer: "4"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: [
                "Angular",
                "jQuery",
                "RequireJS",
                "ESLint"
            ],
            correctAnswer: "4"
        },
    ];
    // start the timer on the right side of the page
    function startCountdown() {
        return setInterval(function () {
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(countdownId)
                $(location).attr('href', $mainPg)
                alert(" TIME OUT!");
            }
            updateTimer();
        }, 1000)
    };
    // does visuals for the timer
    function updateTimer() {
        // this is in case I add more questions I can add time and have minutes set
        let mins = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        // adds 0 integer to 0:01
        if (seconds < 10) { seconds = "0" + seconds; }
        // inserts the timer into the element text
        countdown.textContent = mins + ":" + seconds;
    }
    updateTimer()
    countdownId = startCountdown()

    // generates the question and answers, inserting them into the proper element
    function qGenerator() {
        var currentQ = myQuestions[currentIndex];

        $answerButtons.each(function (i, li) {
            if (currentIndex >= 4) {
                hScores = localStorage.setItem("score", JSON.stringify(timeLeft))
                return $(location).attr('href', $highscorePg);
            };
            const $li = $(li)
            $li.find("a").text(currentQ.answers[i])
        });
        $questionHeader.text(currentQ.question)

    };
    // validating answer to user input
    $answerButtons.on("click", function () {
        if (this.dataset.answer !== myQuestions[currentIndex].correctAnswer)
            timeLeft = timeLeft - 20;
        currentIndex++;
        qGenerator();
    });

    qGenerator();
})