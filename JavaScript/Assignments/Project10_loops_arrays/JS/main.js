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

/*=============
END LOOPS ASSIGNMENT
LENGTH PROPERTY CHALLENGE
===============*/

/*Define and learn how to use the JavaScript string length property.
1) length property: returns the length of a string
*/

function lengthPropFunction() { // created lengthPropFunction
    var x = "Click to display the length of this string." // created variable x with string data type
    document.getElementById("Length_Prop").innerHTML = x.length; // displays the length of the string data type given to variable x
}

/*=============
END LENGTH PROPERTY CHALLENGE
FOR LOOP ASSIGNMENT
===============*/

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // is this an array? Yes, it is. 
var Content = ""; // why do we keep creating a variable with a blank string?
var Y; // declares initial variable
function for_Loop() { // created for_Loop() function
    for (Y = 0; Y < Instruments.length; Y++) { // Use for statement, assigns value 0 to variable Y, uses property length on variable Instruments (Length==6), saying that if Y which starts at 0 is less than that increment it by 1. This is repeated until the condition is met, which is when Y increments 7 times, or the block of code is iterated through 7 times. Remember arrays start with the index of 0. There may be 7 values but it begins with the index 0, the last index position would be 6. 
        Content += Instruments[Y] + "<br>"; // what are the brackets for and yielding the Y variable to the instruments?
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/*=============
END FOR LOOP ASSIGNMENT
ARRAY PRACTICE/DEMO
===============*/

// Note: Arrays are objects. Meaning they are umbrellad under the object date type (one of the 7 data types in JavaScript)
function cat_pics() { // created cat_pics() function
    var Cat_Picture = []; // created object Cat_Picture
    Cat_Picture[0] = "sleeping"; // This and the below assignments are the properties of the Cat_Picture object
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating"; 
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

/*=============
END ARRAY PRACTICE/DEMO
DOCUMENT.GETELEMENTBYID().INNERHTML ASSSIGNMENT
===============*/

function array_Function() {
    var Glasses = [];
    Glasses[0] = " Ray-Ban ";
    Glasses[1] = " Gucci ";
    Glasses[2] = " Tom Ford ";
    Glasses[3] = " Oakley ";
    Glasses[4] = " Ace & Tate "
    document.getElementById("Array").innerHTML = "Some of the top glasses manufacturers are " + Glasses[0] + "and"  + Glasses[1];
}