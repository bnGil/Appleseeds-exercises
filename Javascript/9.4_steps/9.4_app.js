function stepsN(N) {
  let stepString = "'";
  for (let i = 0; i < N; i++) {
    stepString += "#";
    for (let j = N; j - 1 > i; j--) {
      stepString += " ";
    }
    console.log(stepString + "'");
    stepString = stepString.replaceAll(" ", "");
  }
}

stepsN(7);
