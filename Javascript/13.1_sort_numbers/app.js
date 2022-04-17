const numbers = [1, -5, 666, 2, 400, 11];

// 1)
const ascNumbers = numbers.slice().sort((a, b) => a - b);

//2)
const descNumbers = numbers.slice().sort((a, b) => b - a);

// sort method changes the original array. so we use an empty slice method to return a copy of the numbers array

console.log(ascNumbers);
console.log(descNumbers);
