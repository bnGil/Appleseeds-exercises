function makeAllCaps(arrOfWords) {
  const capsWords = [];
  return new Promise((resolve, reject) => {
    if (arrOfWords && arrOfWords.length > 0) {
      arrOfWords.forEach((word) => capsWords.push(word.toUpperCase()));
      resolve(capsWords);
    } else {
      reject("Nothing to work with");
    }
  });
}

function sortWords(arrOfWords) {
  return new Promise((resolve, reject) => {
    if (isContainAlpabetic(arrOfWords)) {
      resolve(arrOfWords.sort());
    } else {
      reject("Contains non-alphabetic. Can not sort");
    }
  });
}

function isContainAlpabetic(arrOfWords) {
  return arrOfWords.every((word) =>
    word
      .split("")
      .every((letter) => letter.toUpperCase() !== letter.toLowerCase())
  )
    ? true
    : false;
}

// const arr = ["hello", "bye", "amigo"];
// const arr = [];
const arr = ["hello2", "bye", "amigo"];
makeAllCaps(arr)
  .then((capsArr) => sortWords(capsArr))
  .then((sorted) => console.log(sorted))
  .catch((error) => console.log(error));
