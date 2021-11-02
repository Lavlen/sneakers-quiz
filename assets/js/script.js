// create variables to hold the elements return from within the document
const homePageBox = document.querySelector(".home-page-box");
const quizBox = document.querySelector(".questions-box");
const scoreBox = document.querySelector(".score-box");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionWrapper = document.querySelector(".option-wrapper");
const answerSection = document.querySelector(".answers-area");
const maxNumQuestions = 10; // sets the total number of questions in the quiz

let questionCounter = 0; // holds the value of the number of each question
let questionInProgress; // holds the parameters of the current question
let newQuestions = []; // holds new questions array
let newOptions = []; // holds new options array
let correctAnswers = 0; // holds the value of the number of correctly answered questions
let answered = 0; // holds the value of the number of attempted questions
let userName = sessionStorage.getItem("name"); // holds the value of the username entered in the form

// stores usernames when submitted
function submitted(e) {
    e.preventDefault();
    let namee = document.forms["id"]["name"].value;
    sessionStorage.setItem("name", namee);
}
// returns the value of the name submitted in the form
document.querySelector("span.name").innerHTML = userName;

// load home page
function loadHomePage() {
    scoreBox.classList.add("hide");
    homePageBox.classList.remove("hide");
    resetQuiz();
}
// start the quiz | hide home-page-box | questions box | set new questions in array
// then call function to get next available question | call function to create answers indicators
function startQuiz() {
    homePageBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setNewQuestions();
    getNextQuestion();
    answersButtons();
}

// store total number of questions available to user into max number of questions variable on load
window.load = function () {
    homePageBox.querySelector(".number-of-questions").innerHTML = maxNumQuestions;
}

//push new questions into newQuestions array
function setNewQuestions() {
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
    	newQuestions.push(quiz[i]);
    }
}

// sets the next available question number, question and choices
// set the number of the question
function getNextQuestion() {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + maxNumQuestions;

    // set question text | get random newQuestion | get the place count of questionIndex from the new questions Array
    // remove the questionIndex from the newQuestion Array to avoid questions repeating
    // show question images if available
    const questionIndex = newQuestions[Math.floor(Math.random() * newQuestions.length)];
    questionInProgress = questionIndex;
    questionText.innerHTML = questionInProgress.q;
    const indexPosition= newQuestions.indexOf(questionIndex);
    newQuestions.splice(indexPosition,1);
    if(questionInProgress.hasOwnProperty("img")){
       const img = document.createElement("img");
       img.src = questionInProgress.img;
       questionText.appendChild(img);
    }
    
    // set options, options lenght then push into newOptions array | set random options
    // get the position of optionIndex form the newOptions array 
    // remove optionsIndex from the newOptions array to avoid repeating options
    const optionLen = questionInProgress.options.length;
    for(let i=0; i<optionLen; i++){
        newOptions.push(i)
    }
    optionWrapper.innerHTML = '';
    let animationDelay = 0.20;
    for(let i=0; i<optionLen; i++){
       const optionsIndex = newOptions[Math.floor(Math.random() * newOptions.length)];
       const indexPosition2 =  newOptions.indexOf(optionsIndex);
       newOptions.splice(indexPosition2,1);
       const option = document.createElement("div");
       option.innerHTML = questionInProgress.options[optionsIndex];
       option.id = optionsIndex;
       option.style.animationDelay =animationDelay + 's';
       animationDelay = animationDelay + 0.20;
       option.className = "option";
       optionWrapper.appendChild(option);
       option.setAttribute("onclick","getResult(this)");
    }
    console.log(newQuestions)
    console.log(newQuestions)
    questionCounter++;
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