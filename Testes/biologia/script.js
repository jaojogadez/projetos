const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "Qual a capital da França?",
        answers: {
            a: "Berlim",
            b: "Madrid",
            c: "Paris"
        },
        correctAnswer: "c"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answers: {
            a: "Vincent van Gogh",
            b: "Leonardo da Vinci",
            c: "Pablo Picasso"
        },
        correctAnswer: "b"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        answers: {
            a: "Terra",
            b: "Marte",
            c: "Júpiter"
        },
        correctAnswer: "c"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<li>
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                </li>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <ul class="answers"> ${answers.join('')} </ul>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} de ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
