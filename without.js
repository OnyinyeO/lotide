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

const without = function (source, itemsToRemove) {
  let filteredArray = [];

  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
};
