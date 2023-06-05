const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const findKey = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return "undefined";
};
