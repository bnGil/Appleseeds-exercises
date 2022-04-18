// 1)
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// variable firstResult will be assigned with the function otherFunction but has the closure of number=9 and the variable b is reassigned with 5.
// then the variable result will be assigned with the returned value of firstResult(2) which is b=5.

// 2)
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
// first of all the variable a is declared and assigned with 1, then function b is invoked but inside of it there is a hoisting of function "a" that is then overwritten to 10 but it's scope
// so console.log(a) will print 10

// 3)
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// In the global scope the variable i is declared and not assigned.
// then the for loop will run 3 times but in delay of 0.1 second so by the time it is invoked i is already 3.
