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

const letterPositions = (sentence) => {
  const results = {};
  // logic to update results here
  for (let i = 0; i <= sentence.length; i++) {
    const letter = sentence[i];

    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
