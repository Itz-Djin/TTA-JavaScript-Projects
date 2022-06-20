document.write(typeof "using the typeof operator before this string to say what data type this sentence is"); // This uses the typeof operator to return on the document what data type is being used
document.write("<br>"); // creates a line break in the html doc
document.write(true + " 50" + 5); // Utilizes the + operator to concatenate the types of data
document.write("<br>"); 
document.write(2E310); // Creates a number that is larger than the max number allowed in JS, so it returns infinite. Any number larger than the max number in JS is defined as infinite
document.write("<br>"); 
document.write(-2E310); // Like the code on line 5 but is smaller than the smallest number allowed. Thus returning -infinte
document.write("<br>");
document.write(8 > 6); // Returns true becuase the value of 8 is greater than 6
document.write("<br>");
document.write(8 < 6); // Returns false because the value of 8 is not less than 6
console.log(2 + 2); // Gives the sum of the operands in the console
console.log(2 > 5); // Gives a boolean statement in the console, this one returns false because 2 is not greater than 5
document.write('<br>');
document.write(55 == 100); // The double equal sign makes a comparison, saying are these two values equal, in this case it would return false 
document.write('<br>');
document.write(5 == 5); // This returns true because the comparison is true
document.write('<br>');
document.write('<br>');
// Triple equal signs assignment
// Part a) Return true by ensuring to match the data type and value
document.write('Triple equal signs assignment');
document.write('<br>');
document.write("string" === "string"); // A triple equal sign makes a comparison between values based on their data type as well as there value. They both have to be the same to return true, in this case two strings of the same value are equal so this returns true.
// part b) Return false by writing a different data type and different value
document.write('<br>');
document.write('string' === 5); // There is are two different data types here so this would return false
// part c) Return false by writing a different data type but the same value for both
document.write('<br>');
document.write('50' === 50); // This as well has seperate data types, although the value is the same, both conditions of same data type as well as same value must be met for the comparison to be true
// part d) Return faslse by writin gthe same data type but different value for both
document.write('<br>');
document.write(50 === 50); // This has both types of data as numbers as well as their value is both 50, the output is true
// AND operator assignment
document.write('<br>');
document.write('<br>');
document.write('AND operator assignment');
document.write('<br>');
document.write(55 > 20 && 40 < 55);
document.write('<br>');
document.write(55 < 20 && 40 < 55);
document.write('<br>');
document.write(50 > 55 || 80 < 100);
document.write('<br>');
document.write(50 == 55 || 85 >= 90);