/*============================
COUNTDOWN CODING ASSIGNMENT
==============================*/

function countdown() { // created countdown function
    var seconds = document.getElementById("seconds").value; // created variable set to the value that is inputted on the HTML doc from user

    function tick() { // created nested function "tick()"
        seconds = seconds - 1; // created new variable seconds which pulls the seconds value and subtracts it by 1
        timer.innerHTML;
        var time = setTimeout(tick, 1000); // pauses the program for 1,000 milliseconds (1 second)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}