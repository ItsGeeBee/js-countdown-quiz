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
var timer = document.getElementById("timer");
var timeRemaining = document.getElementById("timeRemaining");
var timesUp = document.getElementById("timesUp");
// Visible on launch //
var landingDiv = document.getElementById("landing");
var startbutton = document.getElementById("start-button");

// Questions and buttons //
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var optionA = document.getElementById("btn0");
var optionB = document.getElementById("btn1");
var optionC = document.getElementById("btn2");
var optionD = document.getElementById("btn3");
// results //
var answerCheck = document.getElementById("answerCheck");
var results = document.getElementById("results");
var submitInitialBtn = document.getElementById("submitInitialBtn");
// high scores //
var userDetails = document.getElementById("userDetails");
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");
// end screen //
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var highScoreList = document.getElementById("highScoreList");

function newQuiz() {}

function nextQuestion() {}

function checkAnswer() {}

function endQuiz() {}