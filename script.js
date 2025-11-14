let num1, num2, operator, correctAnswer;
let score = 0;
let timeLeft = 30;
let timerInterval;

function generateNumber(level) {
    if (level === "easy") return Math.floor(Math.random() * 10) + 1;
    if (level === "medium") return Math.floor(Math.random() * 20) + 1;
    return Math.floor(Math.random() * 50) + 1;
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("feedback").innerHTML = "⏳ Time's up!";
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

    document.getElementById("question").innerHTML =
        `${num1} ${operator} ${num2} = ?`;

    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerHTML = "";

    startTimer();
}

function checkAnswer() {
    let userAns = Number(document.getElementById("answer").value);

    if (userAns === correctAnswer) {
        document.getElementById("feedback").innerHTML = "✅ Correct!";
        score++;
        document.getElementById("correctSound").play();
    } else {
        document.getElementById("feedback").innerHTML =
            `❌ Wrong! Correct answer: ${correctAnswer}`;
        document.getElementById("wrongSound").play();
    }

    document.getElementById("score").innerHTML = "Score: " + score;
    generateQuestion();
}

function restartGame() {
    clearInterval(timerInterval);
    score = 0;
    document.getElementById("score").innerHTML = "Score: 0";
    generateQuestion();
}

// Start first question when page loads
generateQuestion();
