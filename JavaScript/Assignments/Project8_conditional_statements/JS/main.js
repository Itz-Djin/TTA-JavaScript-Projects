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
function cdFunction() {
    cds = document.getElementById('cd').value;
    if (cds >= 4) {
        amount = "That\'s a large collection you got";
    }
    else {
        amount = "Nice! On your way to be a collector";
    }
    document.getElementById("Amount_of_cds").innerHTML = amount;
}

/*================================
END OF ELSE STATEMENT ASSIGNMENT
START OF
==================================*/