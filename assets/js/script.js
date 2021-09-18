//list of questions

var questionList = [
    {
      question: "Who invented JavaScript?",
      answers: ["Alan Turing", "Ada Lovelace", "Elon Musk", "Brendan Eich"],
      correctAnswer: "Brendan Eich"  
    },

    {
        question: "What does boolean mean in JavaScript?",
        answers: ["Yes / No", "Right / Wrong", "True / False", "Bad / Good"],
        correctAnswer: "True / False"  
    },

    {
        question: "Which of the following cannot be used with the Math object?",
        answers: [".round", ".ceil", ".random", ".PIE"],
        correctAnswer: ".PIE"  
    },

    {
        question: "Which of the following is not an arithmetic operator?",
        answers: ["+", "--", "**", "~"],
        correctAnswer: "~"  
    },
]

//course stipulates that five questions are required. Will need to add another question

//variables querySelectors

var index = 0; //for our questions
var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-quiz-btn");
var showQuestions = document.querySelector("#questions-page");
var CorrectOrWrong = document.querySelector("#correct-or-wrong");
var populateQuestion = document.getElementsByClassName("populate-questions");
var startQuestions = questionList[index];

//listeners here
startButton.addEventListener("click", runQuiz) //runQuiz will be the function to start

function runQuiz() {
    console.log('started') //starts the game. confirmed listener working
    startPage.querySelector("#start-page")
    startPage.setAttribute("class", "hide");
    showQuestions.setAttribute("class", "");

    fetchQuestions();
}

var fetchQuestions = function() {
    document.getElementsByClassName("populate-questions");
    populateQuestion.textContent = startQuestions.question;
    startQuestions.innerHTML = "";

    for (var i = 0; i < 4; i++) {
        //populates the answers in the buttons
        var populateList = document.createElement("li");
        var populateButton = document.createElement("button");
        populateButton.setAttribute("class", "btn");
        populateButton.setAttribute("value", startQuestions.answers[i]);
        populateButton.addEventListener ("click", checkAnswer);
        populateButton.textContent = i + 1 + ". " + startQuestions.answers[i];
        populateButton.addEventListener ("click", checkAnswer);
        populateList.appendChild(populateButton);
        showQuestions.appendChild(populateList);
    
    };
}

var checkAnswer = function() {
    
}

