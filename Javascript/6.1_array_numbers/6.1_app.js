const arr = [1, 7, 3, 0, -5, 7, 3, 9];

// 1) pring with for loop all the numbers.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2)
const arrayLength = (arr) => {
  let counter = 0;
  for (let item of arr) {
    counter++;
  }
  return counter;
};
console.log(arrayLength(arr));

// 3)
const arraySum = (arr) => {
  let res = 0;
  for (let item of arr) {
    res += item;
  }
  return res;
};
console.log(arraySum(arr));

// 4)
const arrayMulti = (arr) => {
  let multi = 1;
  for (let item of arr) {
    multi *= item;
  }
  return multi;
};
console.log(arrayMulti(arr));
