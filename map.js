const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases
const words = ["apple", "banana", "cherry"];
const lengths = map(words, (word) => word.length);
assertArraysEqual(lengths, [5, 6, 6]);

const numbers = [1, 2, 3, 4, 5];
const squared = map(numbers, (num) => num * num);
assertArraysEqual(squared, [1, 4, 9, 16, 25]);
