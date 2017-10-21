$("#start").on("click", function() {
    game.start();
  })

$(document).on('click', '#end', function(){
  game.done();
})
//setup questions for game
var questions = [{
    question: "Who plays Lloyd Christmas in Dumb and Dumber?",
    answers: ["Jeff Daniels", "Jim Carey", "Robin Williams", "Chris Farley"],
    correctAnswer: "Jim Carey"
  }, {
    question: "Which Indiana Jones movie featured Sean Connery?",
    answers: ["Raiders", "Temple of Doom", "Last Crusade", "Crystal Skull"],
    correctAnswer: "Last Crusade"
  }, {
    question: "How many James Bond movies have been made?",
    answers: ["22", "23", "24", "25"],
    correctAnswer: "24"
  }, {
    question: "In Star Wars: A New Hope(the original), who shot first in the cantina?",
    answers: ["Han Solo", "Greedo", "George Lucas", "Nobody Knows"],
    correctAnswer: "Han Solo"
  }, {
    question: "Anrold Schwarzenegger played Dutch in which of his movies?",
    answers: ["Twins", "Commando", "Predator", "The Running Man"],
    correctAnswer: "Predator"
  }, {
    question: "Who is known as the Muscles from Brussels?",
    answers: ["Dolph Lundgren", "Jean Claude Van Damme", "Alexander Skarsgård", "Til Schweiger"],
    correctAnswer: "Jean Claude Van Damme"
  }];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function(){
      game.counter--;
      $('#counter').html(game.counter);
      if(game.counter<=0){
        console.log("Time is up");
        game.done();
      }
    },
    start: function() {
      timer = setInterval(game.countdown, 1000);
       $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
       $("#start").remove();
          for (var i = 0; i < questions.length; i++){
          $('#subwrapper').append('<h2>' + questions[i].question +'</h2>');
          for(var j=0; j<questions[i].answers.length; j++){
            $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='"+questions[i].answers[j] + "'>" + questions[i].answers[j])
        }
      }   
      $('#subwrapper').append('<br><button id="end">Done</button>')  
},
    done:  function(){
      $.each($("input[name='question-0']:checked"), function() {
        if($(this).val() == questions[0].correctAnswer) {
          game.correct++;
        } 
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-1']:checked"), function() {
        if($(this).val() == questions[1].correctAnswer) {
          game.correct++;
        } 
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-2']:checked"), function() {
        if($(this).val() == questions[2].correctAnswer) {
          game.correct++;
        } 
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-3']:checked"), function() {
        if($(this).val() == questions[3].correctAnswer) {
          game.correct++;
        } 
        else {
          game.incorrect++;
        }
      });

     $.each($("input[name='question-4']:checked"), function() {
        if($(this).val() == questions[4].correctAnswer) {
          game.correct++;
        } 
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-5']:checked"), function() {
        if($(this).val() == questions[5].correctAnswer) {
          game.correct++;
        } 
        else {
          game.incorrect++;
        }
      });

      this.result();
    },

    result: function(){
      clearInterval(timer);
      $('#subwrapper h2').remove();

      $('#subwrapper').html("<h2>All Done!</h2>");
      $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
      $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      $('#subwrapper').append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
    }

  }




//  Interval Demonstration
    //  Set our number counter to 100.
    // var number = 30;

    // //  Variable that will hold our interval ID when we execute
    // //  the "run" function
    // var intervalId;


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    // function run() {
    //   intervalId = setInterval(decrement, 1000);
    // }

    //  The decrement function.
//     function decrement() {

//       //  Decrease number by one.
//       number--;

//       //  Show the number in the #show-number tag.
//       $("#timeLeft").html("<h2>" + number + "</h2>");


//       //  Once number hits zero...
//       if (number === 0) {

//         //  ...run the stop function.
//         stop();

//         //  Alert the user that time is up.
//         alert("Time Up!");
//       }
//     }


// function stop() {

//       //  Clears our intervalId
//       //  We just pass the name of the interval
//       //  to the clearInterval function.
//       clearInterval(intervalId);
//     }


// run();