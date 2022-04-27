// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);

//Answer 1: Because the function is invoked in the global scope, "this" refers to the window object so it will be printed.

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

//Answer 2.a: Because greet is an arrow function "this" refers to the window object which has no name so it will log "Hello undefined".
//Answer 2.b: In order to fix this, we should define the method "greet" not as an arrow function.

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//  console.log(this);
// };

// Answer 3: "this" refers to window object so it will log the window object.

// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//  console.log(this);
// };
// myFuncArrow();

//Answer 4: the function is defined and invoked in the window object so "this" refers to window object

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// });

//Answer 5: this point to the element object. if we want to log the window object we have to change the function to funciton declaration
