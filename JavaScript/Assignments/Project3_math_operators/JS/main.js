function add() { // created a function with the name of add
    var addition = 5 + 5; // created a variable that has two operands of five and an add operator
    document.getElementById('Math').innerHTML = '5 + 5 =  ' + addition; // document calls to html doc, getElementById signifies where this function will be used, innnerHTML says it'll be written within that element
}

function sub() { // created a function with the name of sub
    var subtraction = 50 - 25; // created the variable "subtraction" that has the operands 50 and 25 and a minus operator
    document.getElementById('Math2').innerHTML = '50 - 25 = ' + subtraction;
}

function multiply() { // created a function with the name of multipy
    var multi = 5 * 5; // created the variable "multi" that has two fives as the operands and the multiplication operator
    document.getElementById('Multi').innerHTML = '5 * 5 = ' + multi;
}

function divide() { // created the function "divide"
    var divsion = 25 / 5; // created the variable "division" with 25 and 5 as the operands with the division operator
    document.getElementById('Division').innerHTML = ' 25 / 5 = ' + divsion;
}

function equation() { // created the function "equation"
    var expression = (5 + 5) * 5 / 2 - 5; // created the variable "expression" with four 5's and a 2 as the operands and utilizes the plus, minus, multiply, and divide operators
    document.getElementById('Maths').innerHTML = '5 plus 5 then multiplied by 5, divided by 2 then minus another 5 equals ' + expression;
}

function modulus() { // created the function "modulus"
    var mod = 9 % 4; // created the variable "mod" using 9 and 4 as the operands and the modulus operator
    document.getElementById("Modulus").innerHTML = "When the dividen is 9 and the divisor is 4 you are left with a remainder of: " + mod;
}

function negation() { // created the function "negation"
    var A = 9; // created the variable "A" with a value of 9
    document.getElementById("Unary").innerHTML = -A; // here is a unary operator being used called the "negation operator" it retures the opposit or negative form of a value
}

function incrementFunction() { // created the function "incrementFunction" it uses the camelCase naming convention
    var B = 99; // created variable "B" with a value of 99
    B++; // This is calling for variable "B" which has the value of 99 and increases it up by one step to 100
    document.getElementById('Increment').innerHTML = B;
}

function decrementFunction() { // created the function "decrementFunction", it uses the camelCase naming convention
    var C = 100; // created the variable "C" with a value of 100 
    C--; // Takes the value of variable "C", which is 100 and decreases it by one step to 99
    document.getElementById('Decrement').innerHTML = C;
}

document.write(Math.min(23, 325, 46, 54, 96)).innerHTML
