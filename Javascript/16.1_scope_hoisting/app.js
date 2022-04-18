// 1)
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
// The funcA is invoked and then the first log will print undefined because of the hoist of the declaration of variable a.
// The second log will pring 2 because foo is invoked and returns 2

// 2)
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// In the first log the method getFullName will return this.fullName which in this case is "Aurelio De Rosa" because "this" refers to the object called prop.
// Then the function itself is assigned to the variable "test" so it is now a function.
// Then test is invoked in the console.log and will return "John Doe" because "this" now refers to the window object (and has the variable fullName) so "John Doe" will be logged

// 3)
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
// funB is invoked so inside of it there is the global variable b that gets 0 and then the variable a declared with the let keyword and gets the value of b.
// a++ makes a 1 and then a is returned.
// after the execution "a" will be deleted because its' scope is the function's so the log will be typeof a which is undefined.  b is 0 so typeof 0 is number.

// 4)
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// In the creation phase funcC is declared with "1" but afterwards it's being overwritten by another funcC with "2".
// Therefore, In the execution phase the two calls will log "2" twice

// 5)
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);
// The call of funcD1 creates a global variable "d" that assigned with 1. so the console.log of d will print 1.
// in the funcD2 the variable "e" is known in the function scope only so the log of it will cause an error.

// 6)
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// the first console.log will print f as undefined because of hoisting the variable declaration of "f".
// then the variable "f" is assigned with 1, the funcE is invoked and prints "f" as 1
