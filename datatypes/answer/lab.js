window.onload = function() {
  console.log("LOADED")
}
/*
1: Create variables to hold the following information about a dog:
  * name
  * weight
  * length of tail
  * whether or not it is friendly

Assign these variables with values of the corresponding types.
*/

// Your solution to #1:
var name = 'Fido';
var weight = 65;
var tailLength = 15;
var isFriendly = true;


/*
2: Use 'console.log()' to log the value of each of the variables to the console.
*/

// Your solution to #2:
var name = 'Fido';
console.log(name);
var weight = 65;
console.log(weight);
var tailLength = 15;
console.log(tailLength);
var isFriendly = true;
console.log(isFriendly);



/*
3: Re-assign the following variables with boolean values:
*/

var age = 9;
var address = '1908 Sout Banana Street';
var date = '12/4/2018';
var url = 'http://localhost:8080';



// Your solution to #3:
// var ageIsNine = true;
// var addressIs1908 = true;
// var dateIsDec42018 = true;
// var urlIsLocal8080 = true;

console.log(age);
age = true;
console.log(age);
address = true;
date = true;
url = true;


/*
4: Create an array literal in a variable named `months`, add each of the twelve
months stored as strings. Use `console.log()` to log the month you were born.
*/

// Your solution to #4:
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

console.log("My birth month is" + months[5]);



/*
5: Declare a variable `person`, but don't initialize it with a variable. Use
`console.log()` to print out the variable, what is the result?
*/

// Your solution to #5:
var person;
console.log(person);
