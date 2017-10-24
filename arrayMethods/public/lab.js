/*
0 : 'startingArray' ...
*/

var startingArray = [
  1,2,3,4,NaN,6,7,8,9,NaN,NaN,12,13,14
];

/*
1 : Modify `ex1` ...

Use `splice` and `forEach` to remove all occurences of `NaN` from the `startingArray`,
replace each with the next number in the sequence (e.g: `[4,NaN]` would become
`[4,5]`).

Ensure that you do not modify the actual values of `startingArray`, return a new
array. (***HINT:*** You will need to create a new array with the values of the
one provided as an argument).

*/

var ex1 = function(arr) {
/******************* Your Solution *******************/
var shallowCopy = arr.slice();
shallowCopy.forEach(function(val, index, arr2){
  if((isNaN(val))){
    arr2.splice(index,1, arr2[index-1]+1);
  }
});
return shallowCopy;
/*****************************************************/
};

/*
2 : Modify `ex2` ...

Use `map`, return a new array, convert all of the `NaN` values to `0`.

*/

var ex2 = function(arr) {
/******************* Your Solution *******************/
var shallowCopy2 = arr.map(function(num){
  if ((isNaN(num))){
    return 0;
  }
  else{
    return num;
  }
});

console.log(shallowCopy2);
return shallowCopy2;

/*****************************************************/
};

/*
3 : Modify `ex3` ...

Use `filter`, return a new array which is a subset of the `startingArray` and
does not contain any NaN values.
*/

var ex3 = function(arr) {
/******************* Your Solution *******************/
var shallowCopy3 = arr.filter(function(word){
  return !isNaN(word);
  })

return shallowCopy3;
/*****************************************************/
};

/*
4 : Modify `ex4` ...

Use your solution to `ex3` to return a filtered array without NaN, then `reverse`
the order of the array, then use the `reduce` function to subtract all of the values.
*/

var ex4 = function(arr) {
/******************* Your Solution *******************/
var shallowCopy4 = ex3(arr).reverse().reduce(function(a,b){
  return a-b;
},0)
return shallowCopy4;

/*****************************************************/
};

/*
5 : Modify `ex5` ...

Use `sort` to order the `startingArray` such that the numbers are in ascending
order, and the NaN values are the last three elements of the array. (***HINT:***
 Use an 'or' operator). Be sure not to modify the original array.
*/
var ex5 = function(arr) {
/******************* Your Solution *******************/

var shallowCopy5 = arr.sort(function(a, b) {
  if (isNaN(a)) {
    return 1;
  }
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
return shallowCopy5;


/*****************************************************/
};

/*
6 : Modify `ex6` ...

Use array methods to rotate the values of the array input. For example, if the
spaces parameter was 5, the array would be rotated 5 spaces:

```js
var a = [1,2,3,4,NaN,6,7,8,9,NaN,NaN,12,13,14];

ex6(a,5); // => [6,7,8,9,NaN,NaN,12,13,14,1,2,3,4,NaN];
```
*/

var ex6 = function(arr, spaces) {
/******************* Your Solution *******************/
for (var i = 0; i < spaces; i++) {
  arr.push(arr.shift());
}
return arr;
/*****************************************************/
};
