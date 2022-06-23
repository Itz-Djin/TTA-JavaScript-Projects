// Switch Assignment
function animalFunction() { // Created animalFunction()
    var animalInput = document.getElementById("input").value; // created variable that takes value from the html element with the "input" id
    var animalOutput; // variable declared and given values are below
    var coolAnimal = "\'s are pretty cool!"; // Created variable with value of string
    switch (animalInput) { //Created switch statement that receives its expression from the given variable
        case "Elephant": // Created many cases that specify what the "answer" needs to be in order for its block of code to be executed. 
            animalOutput = animalInput + coolAnimal;
            break;
        case "Orangutan":
            animalOutput = animalInput + coolAnimal;
            break;
        case "German Shepherd":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Rhinocerous":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Peacock":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Crocodile":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Alligator":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Giraffe":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Zebra":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Cobra":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Anaconda":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Rattle Snake":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Blue Ringed Octopus":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Great White Shark":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Sea Otter":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Sword Fish":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Puffer Fish":
            animalOutput = animalInput + coolAnimal;
            break;
        case "Quokka":
            animalOutput = animalInput + coolAnimal;
            break;
        default: // The default case in which none of the other cases occur
            animalOutput = "Please choose an animal exactly as it is typed from the above list.";
    }
    document.getElementById("output").innerHTML = animalOutput;
}

// Canvas Challenge
var canvas = document.getElementById("Canvas"); // created a variable that makes changes to the canvas element

canvas.width = window.innerWidth; // specifies the width of our canvas element
canvas.height = window.innerHeight; // specifies the height of our canvas element

var c = canvas.getContext('2d'); // pull the getContext method() applies it to our canvas variable and we declared those methods to a new variable c for short hand of context

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(900, 100, 500, 500); // fillRect() function takes four values: x, y, width, height. coordinates begin in the top right of canvas element.
c.fillStyle = "#fa43a7"; // The fillStyle property applies a color to our rectangles
c.fillRect(700, 700, 100, 100);
c.fillStyle = "#30FAFA";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath(); // starts the path of our line on the canvas element
c.moveTo(50, 300); // declares where the path starts (x, y) coordinates... the point is invisible until a stroke() is invoked
c.lineTo(300, 100); // creates a line to a designated point, the point is what is created with the coordinates.. as well invisible until a stroke() is invoked
c.lineTo(400, 300); // creates another point that connects a line where the earlier point is
c.lineTo(900, 400);
c.strokeStyle = "#fa38a2";
c.stroke(); // displays the actual line that is connecting the points

// Arc / Circle
/*
c.beginPath();
c.arc(1800, 400, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
*/

for (var i = 0; i < 50; i++) { // created a for loop that will iterate the block of code 50 times, end product will have 50 circles (arcs) created in our canvas element
    var x = Math.random() * window.innerWidth; // declares variable x, invokes the Math.random() method giving us a random number multiplied to the width of the canvas, generating a random circle each iteration
    var y = Math.random() * window.innerHeight; // same as the variable x but declared y for the height, generating 50 random circles
    c.beginPath(); // Starts the path for the circles
    c.arc(x, y, 30, 0, Math.PI * 2, false); // creates the circles and there respective size
    c.strokeStyle = 'blue'; // The property strokeStyle allows us to give a color
    c.stroke(); // creates the actual line we see
}