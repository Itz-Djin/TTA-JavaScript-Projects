function my_Function() { // Created the function "my_Function"
    document.getElementById("Test").innerHTML = 0 / 0; // Returns NaN(Not a Number)
}

document.getElementById("NaN_T").innerHTML = isNaN("Hello World!"); // returns True becuse the isNaN method asks if the value in parenthesis is NOT a number, in this case it's a string. 
document.getElementById("NaN_F").innerHTML = isNaN('555'); // returns false because, although it is a string it is a number.
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(-2E310);
