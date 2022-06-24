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

function array_Function() { // created array_Function()
    var Glasses = []; // created an array
    Glasses[0] = " Ray-Ban "; // Initialized the array with index 0-4
    Glasses[1] = " Gucci ";
    Glasses[2] = " Tom Ford ";
    Glasses[3] = " Oakley ";
    Glasses[4] = " Ace & Tate "
    document.getElementById("Array").innerHTML = "Some of the top glasses manufacturers are " + Glasses[0] + "and" + Glasses[1];
}

/*=====================
END OF DOCUMENT.GETELEMENTBYID().INNERHTML ASSSIGNMENT
CONST KEYWORD ASSIGNMENT
=======================*/

function constant_function() { // created constant_function()
    const Musical_Instrument = { // created Musical_Instrument object with various properties (Key:Value Pairs)
        type: "guitar",
        brand: "Fender",
        color: "black"
    };
    Musical_Instrument.color = "blue"; // Changed the value of the color key to value black
    Musical_Instrument.price = "$900"; // Added another property with name of price and value of $900
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

/*========================
END OF CONST KEYWORD ASSIGNMENT
LET KEYWORD ASSIGNMENT
==========================*/

var X1 = 99; // declared X1 globally
console.log(X1);
{
    let X1 = 88; // declared X1 in a block scope only can use const and let keywrod to do that
    console.log(X1);
}
console.log(X1); // shows that it can't access the variable declared in the block scope

/*==========================
END OF KEYWORD ASSIGNMENT
RETURN STATEMENT CHALLENGE
============================*/

let c = returnPracticeFunction(6, 9); // declared c variable and assigned it the value of said function with arguments 6 and 9
document.getElementById("Return").innerHTML = c; // This will display the result in the variable c's value
function returnPracticeFunction(a, b) { // created returnPracticeFunction with parameters a and b that pull the arguments from the variable that is invoking it
    return a * b; // then those arguments are multiplied and the sum is returned as the value to variable c
}

/*===========================
END OF KEYWORD ASSIGNMENT
OBJECTS AS DATA STRUCTURES USING PROPERTIES AND MEHTODS PRACTICE/DEMO
=============================*/

let car = { // created the object called car
    make: "Dodge ", // creating different properties, this is a state
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

/*=============================
END OF OBJECTS AS DATA STRUCTURES USING PROPERTIES AND METHODS PRACTICE/DEMO
OBJECT ASSIGNMENT
===============================*/

let mug = { // created the object called mug
    material: "clay ",
    handle: "medium ",
    shape: "round ",
    depth: "4in ",
    description: function () {
        return "The mug is a made of " + this.material + "with a " + this.handle + "sized handle. The shape is: " + this.shape + "and the depth is: " + this.depth;
    }
};
document.getElementById("Mug_Object").innerHTML = mug.description();

/*======================
END OF OBJECT ASSIGNMENT
BREAK AND CONTINURE CHALLENGE
========================*/

/* Define and learn how to utilize the (1) break statement and (2) continue statement
1) Break statement: "jumps out" of a loop, when a condition is met within a loop adding the break statement tells the loop to stop at that specified condition point
2) Continue statement: "jumps over" one iteration in the loop, when a condition is created the continue statement says to skip over that specific conditions point
*/

let cont2 = ""; // Why do we create a string that is empty, is this similar to why we add a value attribute with no value, were indicating the user to give a valuer, in this case the variable is waiting for a value to be given to it?
for (let i = 0; i < 10; i++) { // iterates through the for loop as long as the variable i is less than 10
    if (i === 5) { continue; } // once the iterations reach 5 as a value and data type number, it will not show that step when printed, but it will continue after that printing the remaining iterations
    cont2 += "Number " + i + "<br>"; 
}
document.getElementById("Continue").innerHTML = cont2;

let break2 = ""; // created variable break2 with empty string
for (let i = -4; i < 10; i++) { // created for loop where variable i starts at -4, and when variable i is less than 10, it iterates one increment
    if (i === 5) { break; } // created if statement, when i equals the value of 5 and data type of number, break the loop (End the loop)
    break2 += "Number " + i + "<br>";
}
document.getElementById("Break").innerHTML = break2;

