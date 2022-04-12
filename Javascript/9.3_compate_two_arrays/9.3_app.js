const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const arraysElementsCompare = (arr1, arr2) => {
  let mutualElements = [];
  for (let i1 = 0; i1 < arr1.length; i1++) {
    for (let i2 = 0; i2 < arr2.length; i2++) {
      if (arr1[i1] === arr2[i2] && !mutualElements.includes(arr1[i1])) {
        mutualElements.push(arr1[i1]);
      }
    }
  }
  return mutualElements;
};

console.log(arraysElementsCompare(food, food1));
