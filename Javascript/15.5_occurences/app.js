function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

// i ran the debugger step by step and noticed that the counter is not updating
// i changed to counter++
