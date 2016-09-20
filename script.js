$(document).ready(function() {});
question1()

function question1() {
    var answer1 = prompt("What is the capitol of Wisconsin?(1)cheese(2)ham");
    if (answer1 == 1) {
        question2();
    } else if (answer1 == 2) {
        addPiece1()
        question2();
    }
}

function question2() {
    var answer2 = prompt("What is the caitol of Washington?(1)pie(2)car");
    if (answer2 == 1) {
        question3();
    } else if (answer2 == 2) {
        addPiece2()
        question3();
    }
}

function question3() {
    var answer3 = prompt("What is the capitol of New York?(1)rope(2)popper")
    if (answer3 == 1) {
    question4();
} else if (answer3 == 2) {
    addPiece3()
    question4();
}
}
/*function question3 () {
  prompt ("How many licks does it take to get the center of a tootsie pop?")
  var licks = 3;
  switch (licks) {
    case "1":
      gameOver()
      break;
  case "2"
      gameOver()
    break;
    case "3"
    question4()
    break;
  }
}
*/
function addPiece() {
  $(".head").hide();
};
function addPiece() {
  $(".body").hide();
};
function addPiece() {
  $(".left-arm").hide();
};
function addPiece() {
  $(".right-arm").hide();
};
function addPiece() {
  $(".left-leg").hide();
};
function addPiece() {
  $(".right-leg").hide();
};
