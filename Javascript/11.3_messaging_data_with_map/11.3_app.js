const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1)
const getNames = (arr) => {
  const namesArr = arr.map((person) => {
    return person.name;
  });
  return namesArr;
};
console.log(getNames(data));

// 2)
function bornBefore1990(arr) {
  const arrOfObj = [];
  arr.forEach((person) => {
    if (person.birthday.split("-")[2] < 1990) {
      arrOfObj.push(person);
    }
  });
  return arrOfObj;
}
console.log(bornBefore1990(data));

// 3)
const foodOccurances = (arr) => {
  const foodObj = {};
  arr.forEach((person) => {
    if (person.favoriteFoods) {
      if (person.favoriteFoods.meats) {
        person.favoriteFoods.meats.forEach((meat) => {
          if (foodObj[meat]) {
            foodObj[meat] += 1;
          } else {
            foodObj[meat] = 1;
          }
        });
      }
      if (person.favoriteFoods.fish) {
        person.favoriteFoods.fish.forEach((fish) => {
          if (foodObj[fish]) {
            foodObj[fish] += 1;
          } else {
            foodObj[fish] = 1;
          }
        });
      }
    }
  });
  return foodObj;
};
console.log(foodOccurances(data));
