const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (allItem, expectedResult) => {
  const result = {};
  for (const item of allItem) {
    if (item !== " ")
      if (expectedResult[item]) {
        if (result[item]) {
          result[item] += 1;
        } else result[item] = 1;
      }
  }
  return result;
};
