/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  // your code here
  /* START SOLUTION */
  num = num.toString();

  var isNegative;
  if (num[0] === "-") {
    isNegative = true;
    num = num.substring(1);
  }

  var total = 0;
  for(var i = 0; i < num.length; i++) {
    total += Number(num[i]);
  }
  return isNegative ? total - Number(num[0]) * 2 : total;
  /* END SOLUTION */
}
