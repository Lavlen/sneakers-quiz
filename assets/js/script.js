// create variables to hold the elements return from within the document
const homePageBox = document.querySelector(".home-page-box");
const quizBox = document.querySelector(".questions-box");
const scoreBox = document.querySelector(".score-box");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionWrapper = document.querySelector(".option-wrapper");
const answerSection = document.querySelector(".answers-section");
const maxNumQuestions = 10; // sets the total number of questions in the quiz

let questionCounter = 0; // holds the value of the number of each question
let questionInProgress; // holds the parameters of the current question
let newQuestions = []; // holds new questions array
let newOptions = []; // holds new options array
let correctAnswers = 0; // holds the value of the number of correctly answered questions
let answered = 0; // holds the value of the number of attempted questions
let userName = sessionStorage.getItem("name"); // holds the value of the username entered in the form

function submitted() {

}

function loadHomePage() {

}

function startQuiz() {

}

function setNewQuestions() {

}

function getNextQuestion() {

}

function getResult() {

}

function cannotSelectOptions() {

}

function answersButtons() {

}

function UpdateAnswersButtons() {

}

function next() {

}

function endOfQuiz() {

}

function quizScore() {

}

function resetQuiz() {

}

function restartQuiz() {
    
}