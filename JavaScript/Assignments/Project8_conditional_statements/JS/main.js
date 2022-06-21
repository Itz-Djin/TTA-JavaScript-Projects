// Practice IF statements. Section 2, Subsection E, step 145: IF statements
if (1 < 2) { // stating that if the statement is true, which it is, display the method below
    document.write("The left number is smaller than the number on the right." + "<br>");
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
START OF
============================*/