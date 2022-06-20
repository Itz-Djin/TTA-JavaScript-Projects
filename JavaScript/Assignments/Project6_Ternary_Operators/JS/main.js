/*
// Ternary Operators Practice
document.write(Bigger = (5 < 1) ? "Left number is bigger" : "Right number is bigger");
document.write("<br>");
*/

// Ternary Operators practice 2
function Ride_Function() { // Created the function "Ride_Function"
    var Height, Can_ride; // Created two variables: "Height" and  "Can_ride"
    Height = document.getElementById("Height").value; // Defined the Height variable, Obtains value from html element with ID of Height, value = 52
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
};
// Ternary Operators Challenge
function voteFunction() { // Created the function "voteFunction"
    var age, canVote; // Created the variables "age" and "canVote"
    age = document.getElementById("Age").value; // Defined the age variable, which gets its value from the html element with the ID of "Age", that value = 18
    canVote = (age < 18) ? "You are not eligible to vote" : "You are eligible to vote"; // Defined canVote variable with ternary operator, which states if the age (18) is less than 18 then print string before colon, else the age is greater than 18 print string after colon
    document.getElementById("Vote").innerHTML = canVote; // This prints the actual string, dependent on value given, to the html element with ID of "Vote"
};

