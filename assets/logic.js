var trivia = {
    questionsAndAnswers: [{
            question: "What real life actor did Christian Bale base his character on in the film American Psycho?",
            answer1: "Tom Cruise",
            answer2: "Adam Sandler",
            answer3: "Christian Bale",
            answer4: "Tom Hanks",
            movie: "american_psycho"
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
            movie: "harry_potter"           
        },
        {
            question: "Who was the first character to fart in a Disney movie?",
            answer1: "Pumba - the Lion King",
            answer2: "Phil - Herculese",
            answer3: "Dopey - Snow White and the Seven Dwarves",
            answer4: "Cogsworth - Beauty and the Beast",
            movie: "lion_king"              
        },
        {
            question: "What line is said in every Star Wars movie?",
            answer1: "I have a bad feeling about this.",
            answer2: "I don't have time for this.",
            answer3: "I don't get paid enough for this.",
            answer4: "Where is my super suit?",
            move: "star_wars"
        },
    ],
}

function initialize(){
    $("#questions").text("");
    $("#answers").text("");
}

function timer(){
    $("#timer").animate({width: 0}, 10*1000);
}


timer();


// $("#questions").text(trivia.questions[1]);