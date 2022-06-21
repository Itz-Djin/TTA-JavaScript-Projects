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
// Coding Assignment
function Vehicle(Make, Model, Year, Color) { // Created function "Vehicle" which is an object constructor
    this.Vehicle_Make = Make; // allows a new object to fill in her, when the new obejct is created it will give it's Make value to this variable
    this.Vehicle_Model = Model; // allows a new object to fill in her, when the new obejct is created it will give it's Model value to this variable
    this.Vehicle_Year = Year; // allows a new object to fill in her, when the new obejct is created it will give it's Year value to this variable
    this.Vehicle_Color = Color; // allows a new object to fill in her, when the new obejct is created it will give it's Color value to this variable
};

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Created the object "Jack" of the Vehicle function. The values are defined for each property within the object constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { // created the function "myFunction"
    document.getElementById("Keywords_and_Constructors").innerHTML = // Changes the content of specified ID within HTML Doc
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model
        + " manufactured in " + Erik.Vehicle_Year; // Concatenates string data type with the specified object and its properties. 
}
// New Keyword Assignment
function Animal(Type, Size, Legs, Hair) { // Created constructor function for Animal objects
    this.Type = Type;
    this.Size = Size;
    this.Legs = Legs;
    this.Hair = Hair;
}

const Elephant = new Animal('Mammal', 'Large', 4, false);
const Monkey = new Animal('Mammal', 'Small-Large', 2, true)
function thisFunction() {
    document.getElementById('New_and_This').innerHTML = "An elephant is a " + Elephant.Type + ". With " + Elephant.Legs + " Legs" + ". Elephants have hair: " + Elephant.Hair;
}

/*
//Reserved Keyword Challenge
document.write('<br>');
var class = "class"; 
document.write(class);
*/

// Nested Functions Assignment
