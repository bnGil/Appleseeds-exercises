// 1) recreate exercise 6.3 with while loop
// const strLenOfArr = (arr) => {
//     let res = [];
//     for (let str of arr) {
//       res.push(str.length);
//     }
//     return res;
//   };
//   console.log(strLenOfArr(["boo", "doooo", "hoo", "ro"]));

const strLenOfArr = (arr) => {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr[i].length);
    i++;
  }
  return res;
};
console.log(strLenOfArr(["boo", "doooo", "hoo", "ro"]));

// 2) what solution you like better for this task? for loop or while loop
// I like the for loop better for this task before the iterator's scope is the for loop only.
// The while's loop iterator needs to be declared before the loop so it's declared outside of the loop's scope.
// Also the for of loop makes it more readable.
