// Ternary Operators Practice
document.write(Bigger = (5 < 1) ? "Left number is bigger" : "Right number is bigger");
document.write("<br>");

// Ternary Operators practice 2
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}