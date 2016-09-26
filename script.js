// AM: Doesn't look like this line is doing anything.
// AM: If you want something to happen when the document loads, you have to put that code inside of the curly brackets.
$(document).ready(function() {});

gameStart()

// AM: Instead of hiding all the hangman parts here, why don't you just initialize them as `display: hidden` in your stylesheet?
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

// AM: As you probably already know, there's a lot of repetition going on here.
// AM: An alternate solution would be to create a single function that handles all the question logic.
// AM: It looks like each of your functions is identical with the exception of the prompt content and the correct answer.
// AM: You could handle these values that changes as parameters to a single function.
// AM: You could also save all question/answer information in an object that contains all that data, and pull from the correct question/answers depending where the user is in the application.
// AM: Happy to talk about this further in person.
function question1() {
    // AM: While prompts get the job done, I would encourage you to think about how you could do this by displayed questions on the page by manipulating the DOM (i.e., displaying questions on the page, not in a prompt box).
    // AM: Let me know if you have any questions on how to start implementing this.
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
