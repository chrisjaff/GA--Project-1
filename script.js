$(document).ready(function() {});

gameStart()

function gameStart(){
  $(".head").hide();
  $(".body").hide();
  $(".left-arm").hide();
  $(".right-arm").hide();
  $(".left-leg").hide();
  $(".right-leg").hide();
question1()
}

function gameEnd() {
  alert("Check your results")
}

function question1() {
    var answer1 = prompt("What is the capitol of Wisconsin?(1)cheese(2)ham");
    if (answer1 == 1) {
        question2();
    } else if (answer1 == 2) {
        addPiece1()
    }
}

function question2() {
    var answer2 = prompt("What is the caitol of Washington?(1)pie(2)car");
    if (answer2 == 1) {
        question3();
    } else if (answer2 == 2) {
        addPiece2()
    }
}

function question3() {
    var answer3 = prompt("What is the capitol of New York?(1)rope(2)popper")
    if (answer3 == 1) {
        question4();
    } else if (answer3 == 2) {
        addPiece3()
    }
}

function question4() {
    var answer4 = prompt("What is the capitol of Maryland?(1)top(2)bottom")
    if (answer4 == 1) {
        question5();
    } else if (answer4 == 2) {
        addPiece4()
    }
}
function question5() {
    var answer5 = prompt("What is the capitol of Maryland?(1)top(2)bottom")
    if (answer5 == 1) {
        question6();
    } else if (answer5 == 2) {
        addPiece5()
    }
}
function question6() {
    var answer6 = prompt("What is the capitol of Maryland?(1)top(2)bottom")
    if (answer6 == 1) {
        gameEnd();
    } else if (answer6 == 2) {
        addPiece6()
    }
}

function addPiece1() {
    $(".head").show()
    question2()
};

function addPiece2() {
    $(".body").show();
    question3()
};

function addPiece3() {
    $(".left-arm").show();
    question4()
};

function addPiece4() {
    $(".right-arm").show();
    question5()
};

function addPiece5() {
    $(".left-leg").show();
    question6()
};

function addPiece6() {
    $(".right-leg").show();
    gameEnd()
};
