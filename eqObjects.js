const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (object1, object2) => {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  if (object1.color !== object2.color) {
    return false;
  }
  if (object1.size !== object2.size) {
    return false;
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let result = eqObjects(shirtObject, anotherShirtObject); // => true

console.log(result);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
result = eqObjects(shirtObject, longSleeveShirtObject); // => false
console.log(result);
