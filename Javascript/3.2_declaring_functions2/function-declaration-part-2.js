/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).

// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
//implicit:
const welcome1 = () => "Welcom to Appleseeds Bootcamp!";
//explicit:
const welcome2 = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }
//implicit:
const power1 = (a) => Math.pow(a, 2);
//explicit
const power2 = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// From function expressions to IIFE functions.

// const squareRoot = (a) => Math.sqrt(a);
((a) => Math.sqrt(a))();

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
((a, b) => Math.random() * (a - b) + b)();
