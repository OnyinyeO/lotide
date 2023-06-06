const tail = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  const result = array.slice(1);
  console.log(result);
  return result;
};

module.exports = tail;
