// 1)
function logTheStr(str) {
  console.log(`The string is: ${str}`);
}

function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}

isString("hello", logTheStr);

// 2)
const dashBetweenWords = (str) => {
  str = str.split(" ").join("-");
  console.log(str);
};

const firstWordUpperCase = (str, func) => {
  let arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  str = arr.join("");
  //   console.log(str);
  func(str);
};
firstWordUpperCase("hello my name is gil", dashBetweenWords);

// 3)
firstWordUpperCase("hello i am gil", logTheStr);
