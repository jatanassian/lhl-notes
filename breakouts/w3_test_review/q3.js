"use strict";

/* Question 03 (stretch)
This is a STRETCH QUESTION.
Let's revisit Question 01 which had us convert an array of arrays into an object.
This time, make it support nested arrays.
The nested arrays also only contain 2 element arrays to represent key & value:
[key, value]. However, this time we are allowing the value to be another array.
Non-array objects need NOT be supported/handled at all.
Examples:
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }
*/

const deepArrayToObject = function (arr) {
  // Create output object
  const output = {};

  // Loop through the array
  for (const subArray of arr) {
    // Extract key and value from sub array
    const key = subArray[0];
    const value = subArray[1];

    // Check if value is array
    if (Array.isArray(value)) {
      // If it is, use recursion
      output[key] = deepArrayToObject(value);
      continue;
    }

    // If not an array, add key and value to output
    output[key] = value;
  }

  // Return output
  return output;
};

// Don't change below:
module.exports = { deepArrayToObject };
