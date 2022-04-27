function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  this.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
  };
  this.attack = function (num) {
    console.log(`${this.name} used ${this.attackList[num]}`);
  };
}

//1) Create three instances of the Pokemon and save them in a variable.
const bulbasaur = new Pokemon("Bulbasaur", "Grass", [
  "Growl",
  "Tackle",
  "Vine Whip",
]);
const charmander = new Pokemon("Charmander", "Fire", [
  "Growl",
  "Scratch",
  "Ember",
]);
const squirtle = new Pokemon("Squirtle", "Water", [
  "Tackle",
  "Tail Whip",
  "Water Gun",
]);

bulbasaur.callPokemon();
bulbasaur.attack(2);
charmander.callPokemon();
charmander.attack(2);
squirtle.callPokemon();
squirtle.attack(2);
