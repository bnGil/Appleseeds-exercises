function percentageOfWorld1(population) {
  let worldPopulation = 7900;
  return Math.round((population / worldPopulation) * 100 * 10) / 10;
}

japanPerc = percentageOfWorld1(126.17);
canadaPerc = percentageOfWorld1(38);
israelPerc = percentageOfWorld1(8.5);
console.log(japanPerc);
console.log(canadaPerc);
console.log(israelPerc);

function percentageOfWorld2(population1, population2, population3) {
  let worldPopulation = 7900;
  let firstCountryPerc =
    Math.round((population1 / worldPopulation) * 100 * 10) / 10;
  let secondCountryPerc =
    Math.round((population2 / worldPopulation) * 100 * 10) / 10;
  let thirdCountryPerc =
    Math.round((population3 / worldPopulation) * 100 * 10) / 10;
  console.log(`The first country's percentage is ${firstCountryPerc}%, the second country's percentage is ${secondCountryPerc}%
and the third country's percentage is ${thirdCountryPerc}%.`);
}

console.log(percentageOfWorld2(126.17, 38, 8.5));
