// a)
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1)
const ascFoods = foods.slice().sort();
// a.2)
const descFoods = foods.slice().sort().reverse();
console.log(ascFoods);
console.log(descFoods);

// b)
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
// b.1)
const ascFoodsWithUC = foodsWithUpperCase.slice().sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
// b.2)
const descFoodsWithUC = foodsWithUpperCase.slice().sort(function (a, b) {
  return b.toLowerCase().localeCompare(a.toLowerCase());
});
console.log(ascFoodsWithUC);
console.log(descFoodsWithUC);

// c)
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const sortByWordLength = words.slice().sort((a, b) => b.length - a.length);
console.log(sortByWordLength);
