function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its' capital is ${capitalCity}`;
}

const israel = describeCountry("Israel", 9.5, "Jerusalem");
const canada = describeCountry("Canada", 38, "Ottawa");
const japan = describeCountry("Japan", 126.17, "Tokyo");

console.log(israel);
console.log(canada);
console.log(japan);
