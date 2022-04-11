const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const lettersCounter = (arr) => {
  const obj = {};
  let counter = 0;
  let str = array.join("").replace(/\s/g, "").toLowerCase();
  for (let letter1 of str) {
    for (let letter2 of str) {
      if (letter1 === letter2) {
        counter++;
        obj[letter1] = counter;
      }
    }
    str = str.replaceAll(letter1, "");
    counter = 0;
  }
  return obj;
};

// let str = array.join("").replace(/\s/g, "").toLowerCase();
// console.log(str);
// console.log(str.includes("ab"));

console.log(lettersCounter(array));
