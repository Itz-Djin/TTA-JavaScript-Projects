function changeColor(newColor) {  //keyword pluse name created 'changeColor' paramaters ask for 'newColor'
    const elem = document.getElementById('para'); // keyword const, references value that invokes the getElementByID method that selects the para Id on the HTML Doc
    elem.style.color = newColor; 
}

function myFunction() { // created variable myFunction
    var sentence = "I am learning"; // created variable sentence with a string value
    sentence += " a lot from this book!"; // added += operator to attach another sting value to the sentence variable
    document.getElementById("conc").innerHTML = sentence; // invoked getElementById on html document selecting the element with id 'conc' to effect whats on the inside of the element using the '.innerHTML' property
}

// Function Challenge
function testRes(num1, num2) {
    return num1 * num2;
}
document.getElementById('test').innerHTML = testRes(3, 40);