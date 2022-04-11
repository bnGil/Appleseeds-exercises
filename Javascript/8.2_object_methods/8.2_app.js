const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: "8.5 mil",
  neighbours: ["Lebanon", "Syria", "Jordan", "Egypt"],
  describe() {
    console.log(
      `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours.length ? false : true;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
