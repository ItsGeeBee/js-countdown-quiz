 // Add questions to an array - Questions from www.w3schools.com
 var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?", options: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"], answer: "d. <script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?", options: ["a. The <body> section", "b. The <head> section", "c. Both the <head> section and the <body> section are correct", "d. The <footer> section"], answer: "c. Both the <head> section and the <body> section are correct"
    },
    {
        question: "The external JavaScript file must contain the <script> tag", options: ["a. Yes", "b. No", "c. Sometimes", "d. Not sure"], answer: "b. No"
    },
    {
        question: "How do you create a function in JavaScript?", options: ["a. function:myFunction()", "b. function = myFunction()", "c. function myFunction()", "d. $function"], answer: "c. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?", options: ["a. call myFunction()", "b. myFunction()", "c. call function myFunction()", "d. run.myFunction()"], answer: "b. myFunction()"
    },
    {
        question: "How can you add a comment in a JavaScript?", options: ["a. <!--This is a comment-->", "b. 'This is a comment", "c. //This is a comment", "d. $This is a comment"], answer: "c. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?", options: ["a. onmouseclick", "b. onclick", "c. onmouseover", "d. onchange"], answer: "b. onclick"
    },
    {
        question: "How do you declare a JavaScript variable?", options: ["a. var carName;", "b. variable carName;", "c. v carName;", "d. for CarName"], answer: "a. var carName;"
    },
    {
        question: "How to write an IF statement in JavaScript?", options: ["a. if i = 5 then", "b. if i == 5 then", "c. if (i == 5) ", "d. if i = 5"], answer: "c. if (i == 5)"
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?", options: ["a. append()", "b. attach()", "c. concat()", "d. None of the above"], answer: "c. concat()"
    },
    {
        question: "JavaScript File Has An Extension of:", options: ["a. .Js", "b. .Java", "c. .javascript", "d. .xml"], answer: "a. .Js"
    },
    {
        question: "JavaScript is the same as Java", options: ["a. False", "b. True", "c. Depends who you ask", "d. Java is the updated version of Javascript"], answer: "a. False"
    }
];

// DOM elements //

// countdown timer //
var timer=document.getElementById("timer");
var timeRemaining=document.getElementById("timeRemaining");
var timesUp=document.getElementById("timesUp");
// Visible on launch //
var landingDiv=document.getElementById("landing");
var startbutton=document.getElementById("start-button");
// Questions and buttons //
var questionDiv= document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var optionA=document.getElementById("buttonA");
var optionB= document.getElementById("buttonB");
var optionC=document.getElementById("buttonC");
var optionD =document.getElementById("buttonD");
// results & highscores//
var answerCheck = document.getElementById("answerCheck");
var results = document.getElementById("results");
var submitInitialBtn= document.getElementById("submitInitialBtn");
var userDetails = document.getElementById("userDetails");
var highScoreSection = document.getElementById("highScoreSection");
var endScore= document.getElementById("endScore");
// end screen //
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn =document.getElementById("clearHighScoreBtn"); 

// Global Variables //
var Index = 0;
var questionNum = 0;
var correctAnswer = 0;

// Timer - 60seconds on the clock //
function newQuiz() {
 totalTime = 60;
 timeRemaining.textContent = totalTime; 
 var startTimer = setInterval(function() {
totalTime--; timeRemaining.textContent = totalTime;
        // if time runs out or there a no questions left, end quiz function triggered //
if(totalTime <= 0) {
 clearInterval(startTimer);
if (Index < questions.length - 1) {
endQuiz();          
}}
 },1000);
 nextQuestion();

    questionDiv.style.display = "block"; // show this section only 
    timer.style.display = "block"; // show this section only 
    timesUp.style.display = "none";
    landingDiv.style.display = "none";
};

// Click events- if option A is clicked run Choose A function to determine if this is the correct answer

startbutton.addEventListener("click", newQuiz);
optionA.addEventListener("click", chooseA);
optionB.addEventListener("click", chooseB);
optionC.addEventListener("click", chooseC);
optionD.addEventListener("click", chooseD);

// Question cycle - links up text options on the webpage and the options in the question array //
function nextQuestion() {
    questionTitle.textContent= questions[Index].question;
    optionA.textContent= questions[Index].options[0];
    optionB.textContent= questions[Index].options[1];
    optionC.textContent= questions[Index].options[2];
    optionD.textContent= questions[Index].options[3];
}

// If answer is correct yay, if answer is incorrect, time will be reduced by 5 seconds //
function checkAnswer(answer) {

    answerCheck.style.display = "block"; // show this section only 

    if (questions[Index].answer == questions[Index].options[answer]) {
        correctAnswer++;
        answerCheck.textContent = "Well done! Thats the right answer.";
    } else {
        totalTime -= 5;
        timeRemaining.textContent = totalTime;
        answerCheck.textContent = "Incorrect";
    }
Index++;
 
    // if no more questions left, end the quiz //
if (Index < questions.length) {
    nextQuestion();
    } else {
    endQuiz();
}}

// checks array for matching answer //
function chooseA() { 
    checkAnswer(0); 
} 
function chooseB() {
     checkAnswer(1); 
}
function chooseC() { 
    checkAnswer(2); 
}
function chooseD() { 
    checkAnswer(3); 
}

function endQuiz() {
    results.style.display = "block"; // show this section only 
    questionDiv.style.display = "none";
    landingDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block"; // show this section only 

    // show final score = totaltime left //
    endScore.textContent = totalTime;
}

// submit user initials to store //
submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

// log into local storage //
function storeHighScores(event) {
event.preventDefault();
 timesUp.style.display = "none";
results.style.display = "none";
landingDiv.style.display = "none";
timer.style.display = "none";
highScoreSection.style.display = "block";  // show this section only 

    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores == null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }
    var userScore = { //userScore = userdetails and timer left on the clock //
        initials: userDetails.value,
        score: endScore.textContent
    };

    console.log(userScore); // log to the console 
    scoresArray.push(userScore); // add the Userscore to the scores array //

    // stringify to store in local storage
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    showHighScores();
}

// function to show high scores //
function showHighScores() {
    var savedHighScores = localStorage.getItem("high scores");
    // if there are no highscores end fuction //
if (savedHighScores == null) { return; }
    console.log(savedHighScores);
    
var storedHighScores = JSON.parse(savedHighScores); // parse = retrieve
     for (i = 0; i < storedHighScores.length; i++) {
    var eachNewHighScore = document.createElement("p"); // Outputs newhighscore into <P> element and stores high score //
    eachNewHighScore.innerHTML = storedHighScores[i].initials + "- " + storedHighScores[i].score;
     savedHighscores.appendChild(eachNewHighScore); 
        }
    
landingDiv.style.display ="none";
timer.style.display ="none";
questionDiv.style.display= "none";
timesUp.style.display ="none";
results.style.display= "none";
highScoreSection.style.display = "block"; // show this section only //
}
    
    
    // got back to the start //
 goBackBtn.addEventListener("click", function() {
landingDiv.style.display = "block"; // shows landing page again to restart quiz //
 highScoreSection.style.display = "none"; 
    });
    
    // remove list of high scores from local storage //
    clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores"); // removed stored highscores from local storage //
    savedHighscores.innerHTML = "High Scores Cleared"; // text shownn on webpage after clearing savedhighscores
    });