// A leap year is divisible by 4 AND divisible by 400 if divisible by 100

const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`It is indeed a leap year`);
    } else {
      console.log(`This is not a leap year`);
    }
  } else if (year % 4 === 0) {
    console.log(`It is indeed a leap year`);
  } else {
    console.log(`This is not a leap year`);
  }
};

console.log(isLeapYear(2400));
