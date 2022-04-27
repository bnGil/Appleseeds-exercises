//1) build your own filter
Array.prototype.myFilter = function (callback) {
  const res = [];
  for (let item of this) {
    if (callback(item)) {
      res.push(item);
    }
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.myFilter((ele) => ele > 5));

//2) build your own find
Array.prototype.myFind = function (callback) {
  for (let item of this) {
    if (callback(item)) {
      return item;
    }
  }
};

console.log(arr.myFind((ele) => ele > 5));

//3) build your own reduce
Array.prototype.myReduce = function (callback) {
  let a = 0;
  for (let i = 0; i < this.length; i++) {
    callback((a = a + this[i]));
  }
  return a;
};

console.log(arr.myReduce((acc, item) => acc + item));
