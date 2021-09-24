//holding the object from local storage
let userHistory; 

if(localStorage.getItem("endScore")){
    userHistory = localStorage.getItem("endScore");
}else{ //if blank empty array
    localStorage.setItem("endScore",JSON.stringify([]))
}

//list of questions
let questionList = [
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
        answers: ["round", "ceil", "random", "PIE"],
        correctAnswer: "PIE"  
    },

    {
        question: "Which of the following is not an arithmetic operator?",
        answers: ["+", "--", "**", "~"],
        correctAnswer: "~"  
    },

    {
        question: "How many scopes does JavaScript Have?",
        answers: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three"  
    },
]

//variables global

var index = 0; //for our questions
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#ending-page")
var startButton = document.querySelector("#start-quiz-btn");
var showQuestions = document.querySelector("#questions-page");
var answerList = document.getElementById("answer-list")
var correctOrWrong = document.querySelector("#correct-or-wrong");
var populateQuestion = document.getElementsByClassName("populate-questions");
var timeLeft = 60;
var quizTimer = setInterval;
var submitButton = document.querySelector("#submit-button");
var clearButton = document.querySelector("#clear-button");
var userInitials = document.querySelector("#name");
var showScoreBoard = document.querySelector("#results-page");

//listeners here
startButton.addEventListener("click", runQuiz) //runQuiz will be the function to start

function runQuiz() {
    console.log('started') //starts the game. confirmed listener working
    startPage.querySelector("#start-page");
    startPage.setAttribute("class", "hide");
    showQuestions.setAttribute("class", "");

//put time inside run quiz function so it starts on click event
    timeLeft = 60;
    quizTimer = setInterval(function(){
    if (timeLeft <= 0) {
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
    const startQuestions = questionList[index];
    
    if(questionList.length -1 < index){
           startQuestions=""
    }
    
    
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
        answerList.appendChild(populateList);

    }
};

//check to see that the answer is correct
var checkAnswer = function() {
   correctOrWrong.removeAttribute("class", "hide");
    if (this.value !== questionList[index].correctAnswer) {
        correctOrWrong.textContent = "Wrong!";
        correctOrWrong.setAttribute("class", "populate-correct-or-wrong");
        document.getElementById("time").textContent = timeLeft - 10 + " seconds remaining";
        if (index === questionList.length -1) {
            endQuiz();
        } else
        timeLeft -= 10;
        index++;
        clearSection();
        fetchQuestions();

    } else {
        correctOrWrong.textContent = "Correct! Good job!"
        correctOrWrong.setAttribute = ("class", "populate-correct-or-wrong");
        if(index === questionList.length -1) {
            endQuiz();
        } else {
            index++;
            clearSection();
            fetchQuestions();
        }
 
    }

};
   
function clearSection() {
       var clearTitle = document.querySelector(".populate-questions");
       var clearChoices = document.getElementById("answer-list");
       clearTitle.innerHTML = "";
       clearChoices.innerHTML = "";
       console.log(clearSection, "clearsection");
   };

   function endQuiz() {
       console.log("hello ")
       clearInterval(quizTimer);
       var clearCorrect = document.getElementById("correct-or-wrong");
       clearCorrect.innerHTML = "";
       showQuestions.setAttribute("class", "hide");
       endPage.setAttribute("class", "");

   };

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    var endScore = {
        score: document.getElementById("time").innerText,
        name: document.getElementById("name").value,
    }

    // save the user's initials to local storage
    var highScore = localStorage.getItem("endScore");
    highScore = JSON.parse(highScore);
    highScore.push(endScore)

    localStorage.setItem('endScore', JSON.stringify(highScore));
    endScores();

    //hide all sections except our our scoreboard
    function endScores() {
        
    endPage.remove();
    startPage.remove();
    showQuestions.remove();
    showScoreBoard.querySelector("#results-page");
    showScoreBoard.setAttribute("class", "");

    var highScore = localStorage.getItem("endScore");
     highScore = JSON.parse(highScore);

     for (let i = 0; i < highScore.length; i++) {
        
        let displayScore = document.createElement("h1");
        displayScore.textContent = highScore[i].name + " : " + highScore[i].score;
        showScoreBoard.appendChild(displayScore);
        
        document.getElementById("clear-button").onclick = clearMe;
        function clearMe(){

            localStorage.clear();
            displayScore.remove();
        }
         
    }

    }

});











