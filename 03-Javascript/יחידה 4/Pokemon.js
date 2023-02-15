function Pokemon(pokemonName = '', pokemonType = '', pokemonAttackList = []) {
    this.pokemonName = pokemonName;
    this.pokemonType = pokemonType;
    this.pokemonAttackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.pokemonName}!`);
}

Pokemon.prototype.attack = function(attackNum) {
    console.log(`${this.pokemonName} used ${this.pokemonAttackList[attackNum]}`);
}

const pukeachoo = new Pokemon('Pukeachoo', 'poison', ['Belch', 'Sludge Bomb', 'Gust', 'Water Gun']);
const burnedizard = new Pokemon('Burnedizard', 'fire-dark', ['Self-Destruct', 'Ember', 'Bite', 'Crunch']);
const mewthree = new Pokemon('Mewthree', 'psychic', ['Flail']);

pukeachoo.callPokemon();
pukeachoo.attack(1);