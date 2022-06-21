// Scope practice Section 2, Subsection D, step 141: Scope
//Global scope example
var x = 10; // This variable is created outside of the function, so it is used in the GLOBAL scope (Global: refers to a identifier that is able for use by anything in the file)
function Add_numbers_1() { // created the function "Add_numbers_1()" 
    document.write(20 + x + "<br>"); // used method write on the document to display a number + our global variable and add a break after
}
function Add_numbers_2() { // created the function "Add_numbers_2"
    document.write(x + 100 + "<br>"); // Same as the "Add_numbers_1" function, just with a different number value, still making use of our global variable of "x"
}
Add_numbers_1(); // invokes designated function 
Add_numbers_2(); // ^^
// Local scope example
function Add_numbers_3() {
    var X = 12
    var x = 11; // Question: what happens if I created the variable x here within the function? Would it overwrite the global variable x? Or is it in a way like css where it's directly specified to the parenting function? what would happen then if I wrote an operation of (x + x?) would it use the local x value of 11 twice? or global? I think it would use the local value since it's more "specific"
    document.write(20 + x + "<br>");
}
/* ===Commented out because it causes an error in console, remove comments to see error. 
function Add_numbers_4() {
    document.write(X + 100); // Here were trying to access the var X created in the "Add_numbers_3" function, as you can see it can't be accessed due to it being local to that specified function. I think this answeres the question I had above
} 
Add_numbers_4();
*/
Add_numbers_3(); // of these two invoked functions 3 and 4, only 3 was displayed because we get an error in the console stating "X is not defined" for the "Add_numbers_4" function. our practice was to test a local function, when a variable is specified locally it can only be invoked by whatever it is nested within
/*==========================
    END OF SCOPE PRACTICE
    START OF  LOCAL AND GLOBAL VARIABLE ASSIGNMENT
    note: basially what you did with the practice, create new variables and functions
============================*/
//Global variables
var b = 'Hello World!'; // created global variables b, c and d
var c = 9;
var d = 'now';
function globalAssignment1() { // created function globalAssignment1
    document.write(b + ' My favorite number is ' + c + '.' + '<br>'); // Used method write to display use of global variables concatenating with strings
}
function globalAssignment2() { // created function globalAssignment2
    document.write( d + ', if you take my favorite number ' + c + ' and subtract it by 1. The result is: ' + (c - 1) + '<br>'); // Same as not on "globalAssignment1"
}
globalAssignment1(); // Inovkes funtion
globalAssignment2(); // ^^
//Local variables
function localAssignment1() { // created function "localAssignment1" utilizing local variables
    var e = 'Hola Mundo!'; // created local variables e and f
    var f = 17;
    document.write(e + ' El numero favoito de mis amigas es ' + f + '<br>'); // utilized local variables concatenating with strings
}
/* Commenting out to progress through outher assignments, delete to see error code.

function localAssignment2() { // created function "localAssignment2" trying to utilized variables local to function "localAssingmnet1"
    console.log(e + ' My friends favorite number is ' + f); // used log method in console to find where erros occur in our expression, because e is local to function "localAssignment1", it is only defined there. Therefore we get an error code: Uncaught ReferenceError: e is not defined at this specified line
}
*/
localAssignment1();