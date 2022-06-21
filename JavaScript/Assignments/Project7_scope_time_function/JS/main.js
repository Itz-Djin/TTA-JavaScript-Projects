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

// Practice IF statements. Section 2, Subsection E, step 145: IF statements
if (1 < 2) { // stating that if the statement is true, which it is, display the method below
    document.write("<br>" + "The left number is smaller than the number on the right." + "<br>");
}
function get_Date() { // the if condition below states that if it is before (less than) 6:00pm, display our string in the html element with designated ID, if this code is ran later than 6:00pm, nothing would display. 
    if (new Date().getHours() < 18) { // the method here returns the hour in the specified datte according to the local time, and hours are listed as integers between 0 and 23. 
        document.getElementById('Greeting').innerHTML = "How are you today?";
    }
}
/*========================
END OF PRACTICE IF STATEMENTS
START OF METHOD ASSIGNMENT
==========================*/
function dateFunction() { // created dateFunction that will utilized an if statement and a variable
    var x = 'This text only appears if it\'s past noon'; // created variable x
    if (new Date().getHours() > 12) { // created conditional if statement. States that if the time is greater than (after, past) noon then display next line
        document.getElementById('MethodAssignment').innerHTML = x; // this variable is only displayed based on the condition of the if statetemnt is met
    }
}

/*==========================
END OF METHOD ASSIGNMENT
START OF IF STATEMENT ASSIGNMENT
============================*/
if (20 / 10 == 8 / 4) { // created if statement saying that if the numbers in are equal display the string in the document
    document.write("THEY ARE EQUAL!");
}

/*==========================
END OF IF STATEMENT ASSIGNMENT
START OF ELSE STATEMENTS PRACTICE
============================*/
function Age_Function() { // Created Age_Function function
    Age = document.getElementById("Age").value; // Created variable that targets the html element with ID "Age" and within that element is an input element with the attribute value which has '""' signifying a value needs to be inputted. The user would give us that value that then is assigned to this variable
    if (Age >= 18) { // created if conditional statement that takes the value from variable age and states that if Age is greater than or equal to 18 display specified block of code 
        Vote = "You are old enough to vote!"; // this is the specified block of code that'll be displayed upon the if statement being true
    }
    else { // created else condition statement that displays block of code upon the if statement being false
        Vote = "You are not old enough to vote!";  // note: the Vote variable now has two values that can be invoked by use of the conditional statements
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; // Display the result of conditional statements using the variable inside HTML doc with specified ID
}

/*==========================
END OF ELSE STATEMENTS PRACTICE
START OF ELSE STATEMENT ASSIGNMENT
============================*/

function cdFunction() { // Created cdFunction
    cds = document.getElementById('cd').value; // created variable cds, gets value from html element with ID 'cd'
    if (cds >= 4) { // created if statement, where if the value from variable cds is greater than or equal to 4 (true), the block of code after is printed
        amount = "That\'s a large collection you got";
    }
    else { // created else statement, where upon the if statement being false, prints the block of code preceding the statement is printed
        amount = "Nice! On your way to be a collector";
    }
    document.getElementById("Amount_of_cds").innerHTML = amount; // dependent on the conditional statement, prints the value for amount
}

/*================================
END OF ELSE STATEMENT ASSIGNMENT
START OF ELSE IF STATEMENT PRACTICE
==================================*/

function Time_function() { // Created Time_function
    var Time = new Date().getHours(); // created variable Time, it uses the Date().getHours() methods to get the time in 24 hours
    var Reply; // created the identifier Reply with no value, they'll be declared later
    if (Time < 12 == Time > 0) { // created if statement, where the block of code after is printed under the conditions that the current time from the time variable is less then 12 but greater than 0. otherwise times between 0 and 12
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // created else if statement, where the block of code after is printed under the conditions that the curren time from the time variable is greater than or equal to twelve, equals the time is less than 18. otherwise times between 12 and 18 (6:00pm)
        Reply = "It is afternoon.";
    }
    else { // created else statement, where the block of code after is printed under the conditions that none of the above conditions are met, which would be anytime between 18 and 00 (midnight)
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Displays the result of the conditionals into html element with the specified ID
}

/*================================
END OF ELSE IF STATEMENT PRACTICE
START OF ELSE IF STATEMENT ASSIGNMENT
==================================*/