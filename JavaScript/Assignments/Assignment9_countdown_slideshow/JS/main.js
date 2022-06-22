let slideIndex = 1; // created global variabl slideIndex with the value of 1
showSlides(slideIndex); // invokes showSlides Function on slideIndex

//Next/previous controls
function plusSlides(n) { // created function plusSlides, parameters is n that is passed to the function
    showSlides(slideIndex += n); // takes the value from the variable slideIndex, that being 1, and adds it to the parameter of n which later will take an argument 
}

//Thumbnail image controls
function currentSlide(n) { // created funciton currentSlide, parameter is n
    showSlides(slideIndex = n); // invokes showSlides function
}

function showSlides(n) { // create showSlides function
    let i; // Declared variable i, note: no assignment or no assigned value
    let slides = document.getElementsByClassName('mySlides'); // created variable slides with value of an HTML element with the class mySlides, there are 3 div elements with that class
    let dots = document.getElementsByClassName('dot'); // created variable dots with value of an HTML element with the class dot, there are 3 span elements with the class dot
    if (n > slides.length) { slideIndex = 1 } // starting here you'll need to review.
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/*============================
COUNTDOWN CODING ASSIGNMENT
==============================*/


function countdown() { // created countdown function
    var seconds = document.getElementById("seconds").value; // created variable set to the value that is inputted on the HTML doc from user

    function tick() { // created nested function "tick()"
        seconds = seconds - 1; // created new variable seconds which pulls the seconds value and subtracts it by 1
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); // pauses the program for 1,000 milliseconds (1 second)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
