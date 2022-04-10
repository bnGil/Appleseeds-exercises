// canada, israel, germany, russia
// 38mil, 8mil, 83mil, 145mil

const populations = [38, 8, 83, 145];

function percentageOfWorld1(population) {
  let worldPopulation = 7900;
  return Math.round((population / worldPopulation) * 100 * 10) / 10;
}

const populationPercentages = (populations) => {
  let percentages = [];
  for (let population of populations) {
    percentages.push(percentageOfWorld1(population));
  }
  return percentages;
};

console.log(populationPercentages(populations));
