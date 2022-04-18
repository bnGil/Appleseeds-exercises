function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);

// i ran the debugger and saw that sum returns NaN
// the debugger shows that after the first iteration sum is NaN so i understood that sum needed to be assigned with 0 when it was declared.
// then i saw that the returned value is the sum instead of the average. we need to divide the sum by the array's length.
