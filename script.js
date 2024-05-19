// Identifiey the element that you would like to manipulate
var startButton = document.querySelector("#start-button")
var startPage = document.querySelector("#start-page")
var questionPage = document.querySelector("#question-page")

var question = document.querySelector("#question-text")
var option1button = document.querySelector("#option-1")
var option2button = document.querySelector("#option-2")
var option3button = document.querySelector("#option-3")
var option4button = document.querySelector("#option-4")

var endPage = document.querySelector("#end-page")
// Created quiz questions
var questionArray = [
{
  text: "What is 1 = 1?",
  options : ["5", "3", "2", "4"],
  answer: '2'
},
{
  text: "What is the color of the sky?",
  options : ["Blue", "Red", "Yellow", "white"],
  answer: 'Blue'
},
{

  text: "What is the day today?",
  options : ["Monday", "Tuesday", "Friday", "Sunday"],
  answer: 'Friday'
}


]