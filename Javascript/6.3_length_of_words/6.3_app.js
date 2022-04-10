const strLenOfArr = (arr) => {
  let res = [];
  for (let str of arr) {
    res.push(str.length);
  }
  return res;
};
console.log(strLenOfArr(["boo", "doooo", "hoo", "ro"]));
