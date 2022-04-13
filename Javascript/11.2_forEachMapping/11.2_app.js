// 1)
const doubleValues = (arr) => {
  return arr.map((n) => {
    return n * 2;
  });
};
// const arr = [1, 2, 3, 4];
// console.log(doubleValues(arr));

// 2)
function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach((n) => {
    if (n % 2 === 0) {
      newArr.push(n);
    }
  });
  return newArr;
}
// console.log(onlyEvenValues(arr));

// 3)
const showFirstAndLast = (arr) => {
  const newArr = [];
  arr.forEach((ele, idx) => {
    if (typeof ele === "string" && (idx === 0 || idx === arr.length - 1)) {
      newArr.push(ele);
    }
  });
  return newArr;
};
const arr3 = ["hello", 2, 3, 4, 5, "bye"];
console.log(showFirstAndLast(arr3));
const arr33 = [1, 2, 3, 4, 5, 6];
console.log(showFirstAndLast(arr33));

// 4)
const vowelCount = (str) => {
  const obj = {};
  const arr = str.toLowerCase().split("");
  arr.forEach((char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      //   obj[char] ? (obj[char] = 1) : (obj[char] += 1);  - Why can't assign in ternary?
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
      //   console.log(obj[char]);
    }
  });

  return obj;
};
const str4 = "ssooA";
console.log(vowelCount(str4));

// 5)
function capitalize(str) {
  const arr = str.split(" ").map((word) => {
    return word.toUpperCase();
  });
  return arr.join("");
}

// 6)
const shiftLetters = (str) => {
  const arr = str.split("").map((char) => {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  });

  return arr.join("");
};
const str = "bcde";
console.log(shiftLetters(str));

// 7)
const swapCase = (str) => {
  let arr = [];
  str.split(" ").map((word, idx) => {
    if (idx % 2 !== 0) {
      arr.push(word.toUpperCase());
    } else {
      arr.push(word);
    }
  });
  return arr.join(" ");
};
const str7 = "hello my name is gil";
console.log(swapCase(str7));
