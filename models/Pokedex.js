const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: 1,
    name: { english: String, japanese: String, chinese: String, french: String },
    type: [],
    base: {
      hp: Number,
      attack: Number,
      defense: Number,
      sp_attack: Number,
      sp_defense: Number,
      speed: Number,
    },
    image: String,
    sprite_front: String,
    sprite_back: String,
    size: Number,
    weight: Number,
});

module.exports = mongoose.model(Pokemons, pokemonSchema);