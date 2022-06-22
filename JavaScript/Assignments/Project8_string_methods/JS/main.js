/*=======================
Concat() Method Practice/Demo
=========================*/
function full_Sentence() { // created full_Sentence function
    var part_1 = "I have "; // created variables part_1-4 for the demonstration of concatenating strings
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // created variable whole_sentence with the value of the first variable then utilizing the concat() method to add the string values from the other variables
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Displays the specified variable in the HTML element with the designated ID
}

/*===========================
END OF CONCAT() METHOD PRACTICE/DEMO
START OF CONCAT() METHOD ASSIGNMENT
=============================*/

function mySentenceFunction() { // created mySentenceFunction
    var sen1 = "Hello world! "; // created multiple variables that will be concatenated using the concat() method
    var sen2 = "My name is Christdjin, ";
    var sen2part1 = "and I\'m creating a sentence using ";
    var sen2part2 = "the concat() method. ";
    var sen3 = "So far I\'m enjoying coding, ";
    var sen3part1 = "but there is alot to learn! ";
    var sen4 = "Thanks for reading my sentence!";
    var multi_Sentences = sen1.concat(sen2, sen2part1, sen2part2, sen3, sen3part1, sen4); // created variable that utilizes concat() method starting with the sen1 variable
    document.getElementById('Conc_Assignment').innerHTML = multi_Sentences; // display selected variable in designated HTML element with specified ID
}

/*============================
END OF CONCAT() METHOD ASSIGNMENT
START OF SLICE() METHOD PRACTICE/DEMO
==============================*/

function slice_Method() { // created slice_Method
    var Sentence = "All work and no play makes Johnny a dull boy."; // created variable with a string value
    var Section = Sentence.slice(27, 33); // created a variable that calls upon another variable with a string data type and slices specific points within the designated variable, leaving a single word
    document.getElementById("Slice").innerHTML = Section;
}

/*==============================
END OF SLICE() METHOD PRACTICE/DEMO
START OF SLICE() METHOD ASSIGNMENT
================================*/

function mySliceFunction() { // created mySliceFunction
    var mySentence = "From this sentence we are going to extract the word sentence"; // created variable with long string value to make use of slice() method
    var sliceSentence = mySentence.slice(10, 19); // created variable utilizing the slice() method on the specified variable
    var sentenceLength = mySentence.length; // used to get the length of the string that is designated
    document.getElementById("Slice_Assignment").innerHTML = sliceSentence;
}

/*==============================
END OF SLICE() METHOD ASSIGNMENT
START OF MORE METHODS CHALLENGE
================================*/

/* In this challenge I'll define (1) toUpperCase() method and (2) search() method.
1) toUpperCase() method: this method is a string method, meaning it is to be performed on data types that are strings.
    It converts an entire string to upper case.
2) search() method: This method is a string method, it returns the postion of the first occurrence of a specified text in a string
*/
function capsFunction() { // created capsFunction
    var text = document.getElementById("CAPS").innerHTML; // created variable text that designates what HTML element we'll use our method on
    document.getElementById("CAPS").innerHTML = text.toUpperCase(); // uses the method to create the change in designated HTML element with the toUpperCase() method
}

function searchFunction() { // created searchFunction
    var text = "We want the position of the word 'position'" // created variable with string value
    document.getElementById("Search").innerHTML = text.search('position'); // made use of search() method to specify where the designated word starts in the string
}

function repFunction() { // created function repFunction
    var text = document.getElementById("Replace").innerHTML; // created variable text with the value of the element with the ID "Replace"
    document.getElementById("Replace").innerHTML = text.replace("good", 'bad'); // replaced the specified word from good to bad.
} // note: when the specified id is obtained and created as the value for the variable, it takes everything within it. There is only one "good" word but if there were multiple what happens?

/*================================
END OF MORE METHODS CHALLENGE
START OF NUMBER METHODS PRACTICE/DEMO
==================================*/

function string_Method() { // created string_Method
    var X = 182; // created variable with a number data type
    document.getElementById('Numbers_to_string').innerHTML = X.toString(); // pulls the number value from the variable and utilizes the toString() method to conver it into to a string, so it would go from 182 to '182'
}

/*===============================
END OF NUMBER METHODS PRACTICE/DEMO
START OF NUMBER METHODS ASSIGNMENT
=================================*/

function stringFunction() {
    var b = 99999999;
    document.getElementById("numToString").innerHTML = b.toString();
}

/*===============================
END OF NUMBER METHODS ASSIGNMENT
START OF TOPRECISION METHOD PRACTICE/DEMO
=================================*/

function precision_Method() { // created precision_Method
    var X = 12938.3012987376112; // created variable with a nubmer value
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // Implemented the toPrecision() method on designated variable
}

/*================================
END OF TOPRECISION METHOD PRACTICE/DEMO
START OF TOPRECISION METHOD ASSIGNMENT
==================================*/

function precisionFunction() { // created precisionFunction
    var D = 9.123456789; // created variable D with number value
    document.getElementById("Precision_Assignment").innerHTML = D.toPrecision(10) + // invoked toPrecision() method multiple times to show its use, each time shows how many numbers are used with the variable. if 10 has a number in the ones place then a decimal and 9 preceding numbers
        "<br>" + D.toPrecision(9) +
        "<br>" + D.toPrecision(7) +
        "<br>" + D.toPrecision(5) +
        "<br>" + D.toPrecision(3) +
        "<br>" + D.toPrecision(1);
}

/*====================================
END OF TOPRECISION METHOD ASSIGNMENT
START OF NEW METHODS CHALLENGE FOR NUMBER METHODS
======================================*/

/* In this challenge you'll research and describe (1) toFixed() Method and (2) valueOf() method.
1) tofixed() Method: is a number method which returns a string, with the number written with a specified number of decimals, it also rounds a number to that given number of digits.
2) valueOf() Method: 
*/

