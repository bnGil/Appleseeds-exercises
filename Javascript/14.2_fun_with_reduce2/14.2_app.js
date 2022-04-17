const arr = [
  {
    name: "gil",
    age: 28,
  },
  {
    name: "eli",
    age: 30,
  },
  {
    name: "yuval",
    age: 50,
  },
];

// 1)
const extractOnlyValue = (arr, key) => {
  return arr.reduce((values, currObj) => {
    values.push(currObj[key]);
    return values;
  }, []);
};

const names = extractOnlyValue(arr, "name");
console.log(names);

// 2)
function countOnlyVowels(str) {
  const arrOfLetters = str.toLowerCase().split("");
  return arrOfLetters.reduce((vowelsObj, letter) => {
    if ("aeiou".includes(letter)) {
      vowelsObj[letter] = (vowelsObj[letter] || 0) + 1;
      return vowelsObj;
    } else {
      return vowelsObj;
    }
  }, {});
}

const str = "aieou sell three";
console.log(countOnlyVowels(str));

// 3)
const addKeyAndValue = (arr, key, value) => {
  return arr.reduce((resArr, currObj) => {
    currObj[key] = value;
    resArr.push(currObj);
    return resArr;
  }, []);
};

console.log(addKeyAndValue(arr, "hello", "bye"));
