const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  const result = array.slice(1);
  console.log(result);
  return result;
};
let tailResult = tail([5, 6, 7]);

assertEqual(tailResult.length, 2);
assertEqual(tailResult[0], 6);
assertEqual(tailResult[1], 7);

tailResult = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(tailResult.length, 2);
assertEqual(tailResult[0], "Lighthouse");
assertEqual(tailResult[1], "Labs");
