var readLineSync = require("readline-sync");
var userName = readLineSync.question("What's your name? ");
var score = 0;
console.log("Hi " + userName + ", welcome to the SRK quiz")

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    console.log("correct answer");
    score = score + 1
  } else {
    console.log("wrong answer")
    score = score - 1
  }
  console.log("Your current score: " + score);
}

var questions = [{
  question: "What's SRK's full name? ",
  answer: "shahrukh khan"
},{
  question: "Where does he live? ",
  answer: "mumbai"
},{
  question: "What's his upcoming movie? ",
  answer: "pathan"
},{
  question: "what's is his age? ",
  answer: "56"
},{
  question: "What's his last movie? ",
  answer: "zero"
}]

for (var i=0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("...........")
console.log("Your final score is " + score)
console.log("...........")
console.log("Thanks for playing!")