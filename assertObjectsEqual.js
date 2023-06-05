const eqObjects = (object1, object2) => {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    console.log(false);
  }

  if (object1.color !== object2.color) {
    console.log(false);
  }
  if (object1.size !== object2.size) {
    console.log(false);
  }
  console.log(true);
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};
