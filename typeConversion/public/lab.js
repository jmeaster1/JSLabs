/*
1: The following function (fahrToCels) should convert a Fahrenheit temperature
to Celsius. Complete the body of the function such that it will take a
 Fahrenheit parameter, and convert it into Celsius.
*/

function fahrToCels(fahr) {
  /*********Your Solution ********/
  // T(°C) = (T(°F) - 32) × 5/9

    var cels;
    var fahr;
    cels = (fahr - 32) * (5 / 9);
  /*******************************/
    return cels;
}

// These are printouts showing the value returned when the function is called
console.log(fahrToCels(212));
console.log(fahrToCels(32));
console.log(fahrToCels(0));

/*
2: The following function (celsToFahr) should convert a Celsius temperature
to Fahrenheit. Complete the body of the function such that it will take a
 Celsius parameter, and convert it into Fahrenheit.
*/

function CelsToFahr(cels) {
    var fahr;
    var cels;
  /*********Your Solution ********/
  // T(°F) = T(°C) × 9/5 + 32
    fahr = (cels * (9 / 5)) + 32;

  /*******************************/
    return fahr;
}

console.log(CelsToFahr(100));
console.log(CelsToFahr(0));
console.log(CelsToFahr(22));
/*
3: Complete the following sum function:
*/

function sum(x, y) {
    var total;
  /*********Your Solution ********/
    total = Number(x) + Number(y);
  /*******************************/
    return total;
}

console.log(sum(1, 2));
console.log(sum("1", 2));
console.log(sum("1", "2"));
console.log(sum("banana", 2));
console.log(sum(1.3, 2.4));
/*
4: Complete the following isEven function, returning a boolean if the
argument (num) is even and a number.
*/


/*********Your Solution ********/
function isEven(num) {
    var bool;
    if (num % 2 === 0 && typeof num === 'number') {
    bool = true;
    } else {
        bool = false;
    }
    return bool;
}
/*******************************/


console.log(isEven(2));
console.log(isEven(3));
console.log(isEven("banana"));
console.log(isEven(190702));
console.log(isEven("2"));

/*
5: Use a ternary operator in the following 'styleMeltdownWarningNotification' function
to return the string 'red' if the parameter 'coolentLvl' is less then 80, or
the string 'green' if 'coolentLvl' is 80 or above. If the input value is not a
number, return 'red' (something is clearly wrong);
*/

function styleMeltdownWarningNotification(coolentLvl) {
    var color;
  /*********Your Solution ********/
    color = coolentLvl < 80 ? 'red' : 'green';

    if(isNaN(coolentLvl)){
        color = 'red';
    }

  /*******************************/
    return color;
}

console.log(styleMeltdownWarningNotification(100));
console.log(styleMeltdownWarningNotification(80));
console.log(styleMeltdownWarningNotification(79));
console.log(styleMeltdownWarningNotification(0));
console.log(styleMeltdownWarningNotification(NaN));
console.log(styleMeltdownWarningNotification(undefined));
console.log(styleMeltdownWarningNotification("oh the humanity"));

/*
6: Modify the the randomWholeNumberGenerator(maximumNumberValue) function to
return either a random number between 0 and the number provided as an argument,
if the result would be NaN, return 0. Do NOT use an if/else to accomplish this.

To generate a random number between 0-1, use the Math.random() method.
*/

function randomWholeNumberGenerator(maximumNumberValue) {
    var randomNum;
  /*********Your Solution ********/
    randomNum = Math.random() * maximumNumberValue;
    if (isNaN(maximumNumberValue)) {
      randomNum = 0;
    }
  /*******************************/
    return randomNum;
}

console.log(randomWholeNumberGenerator(2))
console.log(randomWholeNumberGenerator(100))
console.log(randomWholeNumberGenerator(undefined))
console.log(randomWholeNumberGenerator(NaN))
console.log(randomWholeNumberGenerator("banana"))
console.log(randomWholeNumberGenerator("5"))
