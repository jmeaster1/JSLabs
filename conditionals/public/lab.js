/*
1: Write a for loop that takes the the value of `base`, and modifies a variable
(total) to base to the power of `pow` in the following function:
*/

var exponential = function(base, pow) {
  var total = base;
  /************* Your Code Here **************/
  if (pow == 0) {
    total = 1;
    return total;
  }
  for (var i = 1; i < pow; i++) {
    total *= base;
  }
  /*******************************************/
  return total;

};

/*
2: Modify the following function with a `while` loop to print the 'nth'
Fibonacci number, where the variable `n` is that numbers position. E.g. the 5th
Fibonacci number is `3`.
*/

var fibonacci = function(n) {
  var x = 0, y = 1;
  /************ Your Code Here *************/
  var i = 0;
  if (isNaN(n)) {
    y = NaN;
  } else if (n <= 1) {
    y = 0;
  } else if (n <= 2) {
    y = 1;
  } else {
    n = n-2;
    while (i < n) {
      var temp = x + y;
      x = y;
      y = temp;
      i++;
    }
  }
  return y;
}

/*
3: Complete the following 'reduce' function such that it will return the a value
equal to the all of the values of the provided array (`arr`) combined through
some operation (`op`), where `op` is a string like '+', '-', '*', or '/'.

E.g.

reduce('+', [1,2,3]); // => 6
*/

var reduce = function(op, arr) {
  var total = arr[0];
  /************ Your Code Here *************/
  switch(op) {
    case '+':
      for (var i = 1; i < arr.length; i++) {
         total += arr[i];
      }
      break;
    case '-':
      for (var i = 1; i < arr.length; i++) {
         total -= arr[i];
      }
      break;
    case '*':
      for (var i = 1; i < arr.length; i++) {
         total *= arr[i];
      }
      break;
    case '/':
      for (var i = 1; i < arr.length; i++) {
        total /= arr[i];
      }
    break;
    default:
      return "invalid operator";
  }
  /*****************************************/
  return total;
};

/*
4: Complete the following 'isLeapYear' function such that it will return true if
the `year` provided is a leap year and `false` if the value is not a leap year.
*/

var isLeapYear = function(year) {
  var leapYear;
  /************ Your Code Here *************/
  if (year % 400 == 0) {
    leapYear = true;
  } else if (year % 100 == 0) {
    leapYear = false;
  } else if (year % 4 == 0) {
    leapYear = true;
  } else {
    leapYear = false;
  }

  /*****************************************/
  return leapYear;
};
