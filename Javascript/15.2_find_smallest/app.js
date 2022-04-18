function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (c > a && b > a) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);
console.log(findSmallest(52, 66, 2));
console.log(findSmallest(2, 52, 66));

// 1) First find the line that contains the problem. Write it down.
// I opened the debugger and saw the error on the last line that findSmalest is not defined. the problem is that we called the function by the wrong name.
// now the code is running but it returns 66 which is the BIGGEST and not the smallest number so the problem is with the logic.
