// credit: https://www.youtube.com/playlist?list=PLJAFEg3vkcQN6NGwzI0KX_ZC6dLQjkfeU 
// though significant changes have been made credit the author above for this code
// create variables to hold the elements return from within the document
const homePageBox = document.querySelector(".home-page-box");
const quizBox = document.querySelector(".questions-box");
const scoreBox = document.querySelector(".score-box");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionWrapper = document.querySelector(".option-wrapper");
const answerArea = document.querySelector(".answers-area");
const maxNumQuestions = 10; // sets the total number of questions in the quiz

let questionCounter = 0; // holds the value of the number of each question
let questionInProgress; // holds the parameters of the current question
let newQuestions = []; // holds new questions array
let newOptions = []; // holds new options array
let correctAnswers = 0; // holds the value of the number of correctly answered questions
let answered = 0; // holds the value of the number of attempted questions
// let userName = sessionStorage.getItem("name"); // holds the value of the username entered in the form

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
window.onload = function () {
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
    
    // set options, options length then push into newOptions array | set random options
    // get the position of optionIndex form the newOptions array 
    // remove optionsIndex from the newOptions array to avoid repeating options
    // set transition animation delay on question options 
    const optionLen = questionInProgress.options.length;
    for(let i=0; i<optionLen; i++){
        newOptions.push(i);
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
    console.log(newQuestions);
    console.log(newQuestions);
    questionCounter++;
}

// get result of question in progress | compare answer by selected option id
// make correct option green | mark indicator correct
function getResult(element) {
    const id = parseInt(element.id);
    if(id === questionInProgress.answer){
        element.classList.add("correct");
        UpdateAnswersButtons("correct");
     	correctAnswers++;
    }
    else{
        // set incorrect option to red if option selected is incorrect | update answer buttons 
        element.classList.add("wrong");
        UpdateAnswersButtons ("wrong");
        
        // color correct option green if answer to questionInProgress is incorrect 
        const optionLen = optionWrapper.children.length;
        for(let i=0; i<optionLen; i++){
        	if(parseInt(optionWrapper.children[i].id) === questionInProgress.answer){
              optionWrapper.children[i].classList.add("correct");  		
        	}
        }   
     }
   answered++;
   cannotSelectOptions();
}

// cannot select another option | all options cannot select
function cannotSelectOptions() {
    const optionLen = optionWrapper.children.length;
    for(let i=0; i<optionLen; i++){
    	optionWrapper.children[i].classList.add("already-answered");
    }
}

function answersButtons() {
    answerArea.innerHTML = '';
 	const totalQuestion = maxNumQuestions;
 	for(let i=0; i<totalQuestion; i++){
 	const buttons = document.createElement("div");
    answerArea.appendChild(buttons);
    }
}

function UpdateAnswersButtons(markType) {
    answerArea.children[questionCounter-1].classList.add(markType);
}

// loop through questions until questions complete
function next() {
    if(questionCounter === maxNumQuestions){
        endOfQuiz();
    }
    else {
        getNextQuestion();
    }    
}
// show score box at quiz end 
function endOfQuiz() {
    quizBox.classList.add("hide");
    scoreBox.classList.remove("hide");
    quizScore();
}

// get quiz score
function quizScore() {
    scoreBox.querySelector(".number-of-questions").innerHTML = maxNumQuestions;
    scoreBox.querySelector(".questions-tried").innerHTML = answered;
    scoreBox.querySelector(".total-correct").innerHTML = correctAnswers;
    scoreBox.querySelector(".total-incorrect").innerHTML = answered - correctAnswers;
    const percentage = (correctAnswers/maxNumQuestions)*100;
    scoreBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    scoreBox.querySelector(".total-score").innerHTML = correctAnswers +" / " + maxNumQuestions;
}

// reset variables
function resetQuiz() {
    correctAnswers = 0;
    questionCounter = 0;
    answered = 0;
    newQuestions = [];
}

//restart quiz from first question
function restartQuiz() {
    scoreBox.classList.add("hide");
 	quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

