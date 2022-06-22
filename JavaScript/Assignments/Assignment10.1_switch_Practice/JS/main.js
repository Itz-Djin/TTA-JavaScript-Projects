// SWITCH STATEMENT PRACTICE/DEMO
function Color_Function() { // Created Color_Function()
    var Color_Output; // Declared Color_Output variable
    var Colors = document.getElementById("Color_Input").value; // created variable Colors which gets its value from the designated ID, where a user can input a given color on the webpage
    var Color_String = " is a great color!"; // created Color_String variable
    switch (Colors) { // started switch statement
        case "Red": // Creating a case (a specific situation) of "Red", which states that when the expression with the variable Colors is equal to Red then execute code below (before break)
            Color_Output = "Red" + Color_String; // Assigning a value to our earlier declared Color_Output variable
            break; // If the desired condition of this case is met the the switch statement is closed or exited
        case "Yellow": // This case is like the one above except the value need in order to execute is "Yellow", the remaining cases are all similar with the exception of the value need to perform that case
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}