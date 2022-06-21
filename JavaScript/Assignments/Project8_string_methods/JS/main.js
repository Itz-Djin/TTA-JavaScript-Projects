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

function mySentenceFunction() {
    var sen1 = "Hello world! ";
    var sen2 = "My name is Christdjin, ";
    var sen2part1 = "and I\'m creating a sentence using ";
    var sen2part2 = "the concat() method. ";
    var sen3 = "So far I\'m enjoying coding, ";
    var sen3part1 = "but there is alot to learn! ";
    var sen4 = "Thanks for reading my sentence!";
    var multi_Sentences = sen1.concat(sen2, sen2part1, sen2part2, sen3, sen3part1, sen4);
    document.getElementById('Conc_Assignment').innerHTML = multi_Sentences;
}