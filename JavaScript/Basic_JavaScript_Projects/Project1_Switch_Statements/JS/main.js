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