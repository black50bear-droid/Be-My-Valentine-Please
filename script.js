let currentQuestion = 0;
const questions = document.querySelectorAll('.question');

function nextQuestion() {
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;

    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add('active');
    }
}

function showResult() {
    questions[currentQuestion].classList.remove('active');
    document.querySelector('.result').style.display = 'block';
}

function restartQuiz() {
    document.querySelector('.result').style.display = 'none';
    questions.forEach(q => q.classList.remove('active'));
    currentQuestion = 0;
    questions[0].classList.add('active');
}
