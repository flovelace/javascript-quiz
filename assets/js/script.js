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

//listeners here
startButton.addEventListener("click", runQuiz) //runQuiz will be the function to start

function runQuiz() {
    console.log('started')
}