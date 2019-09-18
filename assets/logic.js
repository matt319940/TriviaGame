var trivia = {
    questionsAndAnswers: [{
            question: "What real life actor did Christian Bale base his character on in the film American Psycho?",
            answer1: "Tom Cruise",
            answer2: "Adam Sandler",
            answer3: "Christian Bale",
            answer4: "Tom Hanks",
            movie: "american+psycho"
        }, 
        {
            question: "What is the first Pixar-produced film to have a female protagonist?",
            answer1: "Brave",
            answer2: "Toy's Story 2",
            answer3: "Mulan",
            answer4: "Snow White",
            movie: "brave"
        },
        {
            question: "How many pairs of glasses did Daniel Radcliff go through by the end of the Harry Potter series?",
            answer1: "160",
            answer2: "10",
            answer3: "57",
            answer4: "3",
            movie: "harry+potter"           
        },
        {
            question: "Who was the first character to fart in a Disney movie?",
            answer1: "Pumba - the Lion King",
            answer2: "Phil - Herculese",
            answer3: "Dopey - Snow White and the Seven Dwarves",
            answer4: "Cogsworth - Beauty and the Beast",
            movie: "lion+king"              
        },
        {
            question: "What line is said in every Star Wars movie?",
            answer1: "I have a bad feeling about this.",
            answer2: "I don't have time for this.",
            answer3: "I don't get paid enough for this.",
            answer4: "Where is my super suit?",
            movie: "star+wars"
        },
        {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            ansewr4: "",
            movie: ""
        }
    ],
}

// The strat screen
function start(){
    $("#timeWrapper").hide();
    $("#questions").hide();
    $("#answers").hide();
}

// Begins the game
$("#start").on("click", function(){
    $("#timeWrapper").show();
    $("#questions").show();
    $("#answers").show();    
    $("#start").hide();
    timer();
    timeout();
});

function randNoRepeat(){

    var rand = [];

    for(var i = 1; i < 5; i++){
        var temp = Math.floor(Math.random() * 4) + 1;
        if(rand.indexOf(temp) == -1){
            rand.push(temp);
        }
        else
         i--;
    }
    return rand;
}

function timer(){
    $("#timer").css("width", "500");
    $("#timer").animate({width: 0}, 30*1000);
}

function timerReset(){
    $("#timer").finish();
}

function question(num){

    $("#questions").text(trivia.questionsAndAnswers[num].question);

    var rand = randNoRepeat();
    var ans1 = "trivia.questionsAndAnswers[num].answer" + String(rand[0]);
    var ans2 = "trivia.questionsAndAnswers[num].answer" + String(rand[1]);
    var ans3 = "trivia.questionsAndAnswers[num].answer" + String(rand[2]);
    var ans4 = "trivia.questionsAndAnswers[num].answer" + String(rand[3]);

    $("#answer1").text(eval(ans1));
    $("#answer2").text(eval(ans2));
    $("#answer3").text(eval(ans3));
    $("#answer4").text(eval(ans4)); 
}

$("#answer1, #answer2, #answer3, #answer4").on("click", function(event){
    num++;

    if($(this).text() == trivia.questionsAndAnswers[num - 1].answer1){
        wins++;
        question(num);
        timerReset();
        timer();
    }
    else{
        losses++;
        question(num);
        timerReset();
        timer();   
    }
    var total = wins + losses + unanswered;
    if(total == 5)
    gameOver();
});

function gameOver(){
    $("#timeWrapper").hide();
    $("#questions").hide();
    $("#answers").hide();

    $("#gameOver").text("Correct Answers: " + wins + "| Incorrect Answers: " + losses + " | Unanswered Questions: " + unanswered);
    var button = $("<button>");
    button.text("Play Again?");
    $("#replayButton").append(button);

    $("#replayButton button").on("click", function(){
        location.reload();
    });
}

function timeout(){
    setTimeout(question, 30 * 1000, num+1);
    setTimeout(timerReset, 30 * 1000);
    setTimeout(timer, 30 * 1000);
    setTimeout(function(){unanswered++}, 30 * 1000);
    setTimeout(function(){num++}, 30 * 1000);
}

start();
var num = 0;
var wins = 0;
var losses = 0;
var unanswered = 0;
question(num);



