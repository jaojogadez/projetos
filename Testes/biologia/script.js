const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

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

let currentQuestionIndex = 0;

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
            `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <ul class="answers"> ${answers.join('')} </ul>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? 'block' : 'none';
    });

    previousButton.style.display = n === 0 ? 'none' : 'inline-block';
    nextButton.style.display = n === slides.length - 1 ? 'none' : 'inline-block';

    // Verifica se todas as perguntas foram respondidas e se é a última pergunta
    submitButton.style.display = (n === slides.length - 1 && allQuestionsAnswered()) ? 'inline-block' : 'none';
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

function allQuestionsAnswered() {
    const slides = document.querySelectorAll('.slide');
    let allAnswered = true;
    slides.forEach((slide, index) => {
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = slide.querySelector(selector);
        if (!userAnswer) {
            allAnswered = false;
        }
    });
    return allAnswered;
}

buildQuiz();

const slides = document.querySelectorAll('.slide');
showSlide(currentQuestionIndex);

previousButton.addEventListener('click', () => {
    showSlide(--currentQuestionIndex);
});

nextButton.addEventListener('click', () => {
    showSlide(++currentQuestionIndex);
});

submitButton.addEventListener('click', () => {
    if (allQuestionsAnswered()) {
        showResults();
    }
});
