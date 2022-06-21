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