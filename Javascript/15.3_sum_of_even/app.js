function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// i ran the script in the debugger and saw that it returns NaN.
// because there is no arr[10].
// we need to lower the indices by one.
