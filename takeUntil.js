const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function (array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

// Test case 1: Take items until the value is greater than 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = takeUntil(numbers, (num) => num > 5);
assertArraysEqual(result1, [1, 2, 3, 4, 5]);

// Test case 2: Take items until the value is less than 0
const temperatures = [25, 30, 28, 22, 20, 18, 15, 12, 10, 8, 5, 2];
const result2 = takeUntil(temperatures, (temp) => temp < 0);
assertArraysEqual(result2, [25, 30, 28, 22, 20, 18, 15, 12, 10, 8, 5, 2]);
