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

var currentNumber = 0;
var time=21
let score = 21;
// Added fucntion to start the quiz
function startQuiz() {
  startPage.classList.add("hide")

  questionPage.classList.remove("hide")
  document.getElementById('timer-page').classList.remove('hide');

  //start timer
let myInterval = setInterval(()=>{
time--;

if(time>=0){
  if(currentNumber < questionsArray.length){
      document.getElementById('timer').textContent = time
  }else{
      clearInterval(myInterval)
      questionPage.classList.add('hide')
      endPage.classList.remove('hide')
      score = getScore()
  document.getElementById('score').textContent = score
  }
}else{
  clearInterval(myInterval)
  document.getElementById('timer').textContent = 0
  questionPage.classList.add('hide')
  endPage.classList.remove('hide')
  score = getScore()
  document.getElementById('score').textContent = 0

}

},1000)


showQuestion()

}



// Added fucntion to get score
if (time >0 ) {
  score = time+1
}else {
  score = 0

}
return score


//Added fucntion to show next question
function nextQuestion(e) {
// Added console.log
  console.log(questionArray[currentNumber].answer);
  console.log(e.target.innerText)

  if(e.target.innerText === questionArray[currentNumber].answer)
  {
    document.getElementById('check-answer').innerHTML=<h3>Correct</h3>

  }else{
    document.getElementById('check-answer').innerHTML=<h3>Wrong</h3>

    time-= 3;

  }

  setTimeout(() => {
    document.getElementById('check-answer').innerHTML=''
    currentNumber++;
    showQuestion()
    }, 1000)

  }

  // Added fucntion to show question`
  function showQuestion(){

    if(currentNumber === questionsArray.length){
        questionPage.classList.add('hide')
endPage.classList.remove('hide')
let score = getScore()
document.getElementById('score').textContent = score
return
    }
    questionPage.innerHTML= 
    `<h1 id="question-text">${questionsArray[currentNumber].text}</h1>
    <button id="option-1">${questionsArray[currentNumber].options[0]}</button>
    <button id="option-2">${questionsArray[currentNumber].options[1]}</button>
    <button id="option-3">${questionsArray[currentNumber].options[2]}</button>
    <button id="option-4">${questionsArray[currentNumber].options[3]}</button>
    `
}

document.getElementById('scoreSubmit').onclick = function() {
  let initials = document.getElementById('initials').value;
  localStorage.setItem('score', score)
  localStorage.setItem('initials', initials)
  viewHighScores()

}

    
    
    





  