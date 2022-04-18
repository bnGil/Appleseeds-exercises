function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [(5, 66, 23)]);

// 1) First find the line that contains the problem. Write it down
// I opened the dev tools>Sources>app.js and it had a X mark at line 3 that said "Uncaught TypeError: Cannot read properties of undefined (reading 'length')"
// 2+3) Which debug method did you use to find the bug?
// I put a breakpoint at where the function was called and played with the next step button. When it entered the function i saw that arr1 was undefined so
// the problem was the arguments. There was missing a comma between the arguments.
// But after I added the comma it still didn't work because we re-assigned a const variable, sum.
