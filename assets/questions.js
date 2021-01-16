$(document).ready(function () {
    const countdown = document.getElementById('countdown');
    let timeLeft = 60;
    let countdownId;
    const $answerButtons = $(".page-item");
    var currentIndex = 0;
    const $questionHeader = $(".questionHeader");
    const $mainPg = "./index.html";
    const $highscorePg = "./highscores.html";
    const $score = $(".score")
    // const localStorageKey    // const progressBar = document.getElementsByClassName('.progress-bar');

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
        $answerButtons.each(function (i, li) {
            if (currentIndex >= 4) {
                localStorage.setItem("score", timeLeft)
                return $(location).attr('href', $highscorePg);
            }
            const $li = $(li)
            $li.find("a").text(currentQ.answers[i])
        });
        $questionHeader.text(currentQ.question)

    };

    $answerButtons.on("click", function () {
        if (this.dataset.answer !== myQuestions[currentIndex].correctAnswer)
            timeLeft = timeLeft - 20;
        currentIndex++;
        qGenerator();
    });

    qGenerator();



    // set highscores on said page

    // not important work on progress bar

    //note from tutor session pseudo code $ infront to know jquery obj
})