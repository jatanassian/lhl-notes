"use strict";

/* Question 02
Write a function which will split an array into two arrays (i.e. partition it).
It will take two parameters, the first is an array of Integer values,
and the second will be a callback which will return a boolean.
If the callback returns true for an element, it should be placed into the left array,
otherwise it should be placed into the right array.
Examples:
- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]
*/

const partition = function (arr, callback) {
  // Create left and right arrays
  const left = [];
  const right = [];

  // Loop over array
  for (const int of arr) {
    // Call the callback for each element to check if true or false
    if (callback(int)) {
      // If true, push to left array
      left.push(int);
      continue;
    }

    // If false, push to right array
    right.push(int);
  }

  // Return array containing left and right arrays
  return [left, right];
};

// Don't change below:
module.exports = { partition };
