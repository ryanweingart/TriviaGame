$("#start").on("click", function (){
   game.start();
});

var questionsArray = [{
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",
}, {
    question:"what is the answer",
    answers: ["a", "b", "c", "d"],
    correctAnswer:"a",

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countDown: function (){
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter === 0) {
            console.log("time up");
            game.done();
        }
    },
    start: function (){
        timer = setInterval (game.countDown, 1000);
        $(".container").prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
        $("#start").remove();
        for (i = 0; i < questionsArray.length; i++) {
            $(".container").append('<h2>' + questionsArray[i].question + '<h2>');
            for (x = 0; x < questionsArray[i].answers.length; x++) {
                $(".container").append("<input type='radio' name='question: "+i+"' value= '" + questionsArray[i].answers[x] + "'> "+ questionsArray[i].answers[x]);
            }
        }
    },
    done: function () {
        $.each($('input[name= "question: 0]" :checked'), function (){
            if ($(this).val() === questionsArray[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 1]" :checked'), function (){
            if ($(this).val() === questionsArray[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 2]" :checked'), function (){
            if ($(this).val() === questionsArray[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 3]" :checked'), function (){
            if ($(this).val() === questionsArray[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 4]" :checked'), function (){
            if ($(this).val() === questionsArray[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 5]" :checked'), function (){
            if ($(this).val() === questionsArray[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 6]" :checked'), function (){
            if ($(this).val() === questionsArray[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name= "question: 7]" :checked'), function (){
            if ($(this).val() === questionsArray[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
    }
}