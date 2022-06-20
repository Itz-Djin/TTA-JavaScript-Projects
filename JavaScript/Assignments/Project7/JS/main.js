function Vehicle(Make, Model, Year, Color) { // Created function "Vehicle" which is an object constructor
    this.Vehicle_Make = Make; // allows a new object to fill in her, when the new obejct is created it will give it's Make value to this variable
    this.Vehicle_Model = Model; // allows a new object to fill in her, when the new obejct is created it will give it's Model value to this variable
    this.Vehicle_Year = Year; // allows a new object to fill in her, when the new obejct is created it will give it's Year value to this variable
    this.Vehicle_Color = Color; // allows a new object to fill in her, when the new obejct is created it will give it's Color value to this variable
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Created the object "Jack" of the Vehicle function. The values are defined for each property within the object constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { // created the function "myFunction"
    document.getElementById("Keywords_and_Constructors").innerHTML = // Changes the content of specified ID within HTML Doc
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model 
        + " manufactured in " + Erik.Vehicle_Year; // Concatenates string data type with the specified object and its properties. 
}