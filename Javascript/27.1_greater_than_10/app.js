function isGreaterThan10(num) {
  const resPromise = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("It is GREATER than 10");
    } else {
      reject("It is SMALLER than 10");
    }
  });
  return resPromise;
}

isGreaterThan10(15)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

isGreaterThan10(6)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
