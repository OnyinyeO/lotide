const eqArray = function (arr1, arr2) {
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

const middle = function (array) {
  const middleIndex = Math.floor(array.length / 2);
  const middleElements = [];

  if (array.length >= 2) return middleElements;

  if (array.length % 2) {
    middleElement.push(array[middleIndex - 1], array[middleIndex]);
    return middleElements;
  } else {
    middleElements.push(array[middleIndex]);
  }
  return middleElements;
};

module.exports = middle;
