const assertArraysEqual = require("./assertArraysEqual");
const middle = require("./middle");

// Test case 1: Even number of elements
const arr1 = [1, 2, 3, 4];
const expected1 = [2, 3];
const result1 = middle(arr1);
assertArraysEqual(result1, expected1); // This should pass

// Test case 2: Odd number of elements
const arr2 = [1, 2, 3, 4, 5];
const expected2 = [3];
const result2 = middle(arr2);
assertArraysEqual(result2, expected2);
