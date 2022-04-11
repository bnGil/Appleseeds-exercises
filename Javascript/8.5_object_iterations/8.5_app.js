const keysValsSwap = (obj) => {
  const newObj = {};
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  for (let i = 0; i < keys.length; i++) {
    newObj[vals[i]] = keys[i];
  }
  return newObj;
};

const object = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(keysValsSwap(object));
