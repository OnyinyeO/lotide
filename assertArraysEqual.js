const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  // If the arrays have different lengths, they are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compare each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // All elements are equal
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(
      `✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`
    );
  } else {
    console.log(
      `❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`
    );
  }
};
