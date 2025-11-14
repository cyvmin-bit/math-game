let num1, num2, operator, correctAnswer;
let score = 0;
let timeLeft = 30;
let timerInterval;

const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

function generateNumber(level) {
    if (level === "easy") return Math.floor(Math.random() * 10) + 1;
    if (level === "medium") return Math.floor(Math.random() * 20) + 1;
    return Math.floor(Math.random() * 50) + 1;
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            feedback.innerHTML = "⏳ Time's up!";
            generateQuestion();
        }
    }, 1000);
}

function generateQuestion() {
    const level = document.getElementById("level").value;

    num1 = generateNumber(level);
    num2 = generateNumber(level);

    let operators = ["+", "-", "×"];
    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === "+") correctAnswer = num1 + num2;
    if (operator === "-") correctAnswer = num1 - num2;
    if (operator === "×") correctAnswer = num1 * num2;

    document.getElementById("question").innerHTML = `${num1} ${operator} ${num2} = ?`;

    answerInput.value = "";
    feedback.innerHTML = "";

    startTimer();
}

function checkAnswer() {
    let userAns = Number(answerInput.value);

    if (userAns === correctAnswer) {
        feedback.innerHTML = "✅ Correct!";
        score++;
        correctSound.play();
    } else {
        feedback.innerHTML = `❌ Wrong! Correct answer: ${correctAnswer}`;
        wrongSound.play();
    }

    scoreDisplay.innerHTML = "Score: " + score;
    generateQuestion();
}

// Enter key submits answer
answerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// Restart button
restartBtn.addEventListener("click", function() {
    clearInterval(timerInterval);
    score = 0;
    scoreDisplay.innerHTML = "Score: 0";
    generateQuestion();
});

// Start the first question
generateQuestion();
