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

//variables global

var index = 0; //for our questions
var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-quiz-btn");
var showQuestions = document.querySelector("#questions-page");
var correctOrWrong = document.querySelector("#correct-or-wrong");
var populateQuestion = document.getElementsByClassName("populate-questions");
var timeLeft = 60;
var quizTimer = setInterval;

//listeners here
startButton.addEventListener("click", runQuiz) //runQuiz will be the function to start

function runQuiz() {
    console.log('started') //starts the game. confirmed listener working
    startPage.querySelector("#start-page")
    startPage.setAttribute("class", "hide");
    showQuestions.setAttribute("class", "");

//put time inside run quiz function so it starts on click event
    timeLeft = 60;
    quizTimer = setInterval(function(){
    if (timeLeft <= 0){
    clearInterval(quizTimer);
    document.getElementById("time").innerHTML = "You ran out of time!";
    endQuiz();
  } else {
    document.getElementById("time").innerHTML = timeLeft + " seconds remaining";
  }
    timeLeft -= 1;
    }, 1000);
    
    fetchQuestions();
};

var fetchQuestions = function() { //populates the questions
    var startQuestions = questionList[index];
    
    document.getElementsByClassName("populate-questions")[0].textContent = startQuestions.question;
    
    for (var i = 0; i < 4; i++) {
        //populates the answers in the buttons
        var populateList = document.createElement("li");
        var populateButton = document.createElement("button");
        populateButton.setAttribute("class", "btn");
        populateButton.setAttribute("value", startQuestions.answers[i]);
        populateButton.addEventListener ("click", checkAnswer);
        populateButton.textContent = i + 1 + ". " + startQuestions.answers[i];
        populateList.appendChild(populateButton);
        showQuestions.appendChild(populateList);

    };
}

//check to see that the answer is correct
var checkAnswer = function() {

    if (this.value !== questionList[index].correctAnswer) {
        correctOrWrong.textContent = "Wrong!";
        correctOrWrong.setAttribute("class", "populate-correct-or-wrong");
        document.getElementById("time").textContent = timeLeft - 10 + " seconds remaining";
        timeLeft -= 10;
        index++;
        fetchQuestions();

    } else {

        correctOrWrong.textContent = "Correct! Good job!"
        correctOrWrong.setAttribute = ("class", "populate-correct-or-wrong");
        index++;
        fetchQuestions();        
    }

};