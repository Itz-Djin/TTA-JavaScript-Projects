/*=============
LOOPS PRACTICE/DEMO
===============*/

function count_To_Ten() { // created function count_To_Ten
    var Digit = ""; // created Digit variable with blank string?
    var X = 1; // created variable X with value 1
    while (X < 11) { // created while loop, stating while X (which is set to 1) is less than 11, let the block of code occur
        Digit += "<br>" + X; // Taking the Digit variable, adding a line break element, and each time we do that on each line X is printed
        X++; // increments X by one
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit; // Displays the variable to the designated HTML element
}

/*=============
END LOOPS PRACTICE/DEMO
LOOPS ASSIGNMENT
===============*/
const cars = ["Toytoa", "Mercedes", "Fiat", "Ford", "Hyundai", "Honda", "Nissan", "Mitsubishi"];
function callLoopFunction() {
    var text = "";
    for (var i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }

    document.getElementById("Looper").innerHTML = text;
    
}