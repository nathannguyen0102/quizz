var btnstart = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionScreen1 = document.querySelector("#questions1");
var questionScreen2 = document.querySelector("#questions2");
var questionScreen3 = document.querySelector("#questions3");
var timerEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");
var wrongChoice = document.querySelectorAll(".wrongchoice");
var rightChoice1 = document.querySelector(".rightchoice1");
var rightChoice2 = document.querySelector(".rightchoice2");
var rightChoice3 = document.querySelector(".rightchoice3");
var display = document.querySelector(".scoredisplay");
var nameEl = document.querySelector("#initials");
var btnSubmit = document.querySelector("#submit");
var time = 45;
var timer;

//add event listener (click) to start the quiz
btnstart.addEventListener("click", function () {
  //hide start screen by add "hide"
  startScreen.setAttribute("class", "hide");
  //display first question by remove "hide"
  questionScreen1.removeAttribute("class");
  //function to set time interval
  timer = setInterval(function () {
    time--;
    timerEl.textContent = time;
    //if run out of time. quizz end and save score
    if (time <= 0) {
      end();
    }
  }, 1000);
  //display timer
  timerEl.textContent = time;
});

// select all wrong choice answer
wrongChoice.forEach((e) => {
  e.addEventListener("click", function () {
    //display wrong choice message
    feedbackEl.removeAttribute("class");
    feedbackEl.textContent = "Wrong choice please choose again";
    //minute 15 second every time user choose the wrong answer
    time -= 15;
    timerEl.textContent = time;
    //game end when tim <=0
    if (time <= 0) {
      time = 0;
      timerEl.textContent = time;
      end();
    }
  });
});

//click event lister to pass to the next question if user choose right answer
rightChoice1.addEventListener("click", function () {
  //clear previous display message
  feedbackEl.textContent = "";
  //hide last question and display next question
  questionScreen1.setAttribute("class", "hide");
  questionScreen2.removeAttribute("class");
});
rightChoice2.addEventListener("click", function () {
  //clear previous display message
  feedbackEl.textContent = "";
  //hide last question and display next question
  questionScreen2.setAttribute("class", "hide");
  questionScreen3.removeAttribute("class");
});
rightChoice3.addEventListener("click", function () {
  //clear previous display message
  feedbackEl.textContent = "";
  //hide last question and display next question
  questionScreen3.setAttribute("class", "hide");
  //end quiz if user finish the test
  end();
});

//end quiz function
function end() {
  //clear previous display message
  feedbackEl.textContent = "";
  //clear time interval
  clearInterval(timer);
  //display endscreen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  //display final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
}

//store name and score in local storage and display result
btnSubmit.addEventListener("click", function () {
  var nameValue = nameEl.value;
  var nameStorage = localStorage.setItem("name", nameValue);
  var getName = localStorage.getItem("name");
  var scoreStorage = localStorage.setItem("time", time);
  var timeDisplay = localStorage.getItem("time");
  var saveScore = (display.textContent =
    getName + " has the score: " + timeDisplay);
});
