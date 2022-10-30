// $(".jumpscare").hide();
document.querySelector(".jumpscare").hidden = true;

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var isTen = false;

// $(document).keypress(function () {
//   alert("pressed")
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

document.addEventListener("keypress", function () {
  // alert("pressed");
  if (!started) {
    document.querySelector("#level-title").innerText = "Level " + level
    nextSequence();
    started = true;
  }
})

// $(".btn").click(function () {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

  // playSound(userChosenColour);
  // animatePress(userChosenColour);

//   //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  // if(userClickedPattern.length == 10 && isTen == false){
  //   isTen = true;
  //   playSound("jump");
  //   $(".jumpscare").toggle()
  //   setTimeout(() => {
  //     $(".jumpscare").toggle();
  //   }, 1000);
  // }
  // checkAnswer(userClickedPattern.length - 1);
// });

document.querySelectorAll(".btn")[0].addEventListener("click", function() {
  // console.log(this.className)

  // var userChosenColour = $(this).attr("id");
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  if(userClickedPattern.length == 10 && isTen == false){
    isTen = true;
    playSound("jump");
    document.querySelector(".jumpscare").hidden = false
    setTimeout(() => {
      document.querySelector(".jumpscare").hidden = true
    }, 1000);
  }
  checkAnswer(userClickedPattern.length - 1);

  // console.log(userChosenColour);
});

document.querySelectorAll(".btn")[1].addEventListener("click", function() {
  // console.log(this.className)

  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  if(userClickedPattern.length == 10 && isTen == false){
    isTen = true;
    playSound("jump");
    document.querySelector(".jumpscare").hidden = false
    setTimeout(() => {
      document.querySelector(".jumpscare").hidden = true
    }, 1000);
  }
  checkAnswer(userClickedPattern.length - 1);

  // console.log(userChosenColour);
});

document.querySelectorAll(".btn")[2].addEventListener("click", function() {
  // console.log(this.className)

  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  if(userClickedPattern.length == 10 && isTen == false){
    isTen = true;
    playSound("jump");
    document.querySelector(".jumpscare").hidden = false
    setTimeout(() => {
      document.querySelector(".jumpscare").hidden = true
    }, 1000);
  }
  checkAnswer(userClickedPattern.length - 1);

  // console.log(userChosenColour);
});

document.querySelectorAll(".btn")[3].addEventListener("click", function() {
  // console.log(this.className)

  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  if(userClickedPattern.length == 10 && isTen == false){
    isTen = true;
    playSound("jump");
    document.querySelector(".jumpscare").hidden = false
    setTimeout(() => {
      document.querySelector(".jumpscare").hidden = true
    }, 1000);
  }
  checkAnswer(userClickedPattern.length - 1);

  // console.log(userChosenColour);
});



//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {

      //5. Call nextSequence() after a 1000 millisecond delay.
      if(gamePattern.length == 10){
        setTimeout(function () {
          nextSequence();
        }, 3000);
  
      } else {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    }

  } else {

    playSound("wrong");
    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200)
    $("#level-title").text("Game Over, Press Any Key to Restart")
    startOver();

  }

}

function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  document.querySelector("#level-title").innerText = "Level " + level

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  document.querySelector("#" + randomChosenColour).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("#" + randomChosenColour).classList.remove("pressed");
  }, 100)
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  // $("#" + currentColor).addClass("pressed");
  document.querySelector("#" + currentColor).classList.add("pressed")
  setTimeout(function () {
    // $("#" + currentColor).removeClass("pressed");
    document.querySelector("#" + currentColor).classList.remove("pressed")
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// yes, this is costa
