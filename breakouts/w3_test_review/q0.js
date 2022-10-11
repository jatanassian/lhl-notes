"use strict";

/* Question 00
Convert a given object into an array of arrays.
Given an object, create an array which contains arrays with the key/value pairs.
To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.
Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.
Examples
- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]
*/

const objectToArray = function (obj) {
  // One line solution
  // return Object.entries(obj);

  // Create output array
  const output = [];

  //  Loop through obj
  for (const key in obj) {
    // Get key and value
    const value = obj[key];

    // Create a sub array containing key and value
    const subArray = [key, value];

    // Push sub array to the output
    output.push(subArray);
  }

  // Return output array
  return output;
};

// Don't change below:
module.exports = { objectToArray };
