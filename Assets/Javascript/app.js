

//  Interval Demonstration
    //  Set our number counter to 100.
    var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timeLeft").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }


function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }


run();