"use strict";

/* Question 01
Convert an array of arrays into an object.
This is the inverse of the previous question.
Arrays will only have two elements: [key, value]
To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.
Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.
Examples:
- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/

const arrayToObject = function (arr) {
  // One line solution
  // return Object.fromEntries(arr);

  // Create output object
  const output = {};

  // Loop through the array
  for (const subArray of arr) {
    // Extract key and value from sub array
    const key = subArray[0];
    const value = subArray[1];

    // Add key and value to output
    output[key] = value;
  }
  // Return output
  return output;
};

// Don't change below:
module.exports = { arrayToObject };
