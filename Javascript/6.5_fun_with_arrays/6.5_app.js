// 1)
const obj = {
  a: 5,
  b: 6,
  c: 7,
};

const arr1 = Array(100).fill(obj, 0, 99);
console.log(arr1.length);

// 2)
const arr2 = Array.from(arr1, (item, index) => index + 1);
console.log(arr2);

// 3)
const arr3 = Object.keys(obj).map((key) => obj[key]);
console.log(Object.keys(obj));
console.log(arr3);

// 4)
const obj4 = Object.assign({}, ["a", "b", "c"]);
console.log(obj4);
const obj44 = { ...["a", "b", "c"] };
console.log(obj44);

// 5)
const arr5 = [1, 2, 3];
console.log(Array.isArray(arr5));

// 6)
//copies that won't change the original
const arr5copy1 = [...arr5];
const arr5copy2 = Array.from(arr5);
//copies that will change
const arr5copy3 = arr5;
