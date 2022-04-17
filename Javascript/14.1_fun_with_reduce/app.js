// Write the following functions using the reduce built-in function:

const numbers = [24, 36, 75, 31, 22, 107];

// 1) max
const maxNum = (arr) => {
  return arr.reduce((max, currVal) => {
    return currVal > max ? currVal : max;
  });
};
console.log(maxNum(numbers));

// 2) sum of even numbers
const sumOfEven = (arr) => {
  return arr.reduce((total, currVal) => {
    return currVal % 2 === 0 ? total + currVal : total;
  }, 0);
};
console.log(sumOfEven(numbers));

// 3) average
const avgOfNums = (arr) => {
  return arr.reduce((avg, currVal, idx, array) => {
    return avg + currVal / array.length;
  }, 0);
};
console.log(avgOfNums(numbers));
