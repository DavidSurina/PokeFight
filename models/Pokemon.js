const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: {type: Number, required: true, unique: true, dropDups: true},
    name: { english: String, japanese: String, chinese: String, french: String },
    type: [],
    base: {
      hp: Number,
      attack: Number,
      defense: Number,
      special_attack: Number,
      special_defense: Number,
      speed: Number,
    },
    image: String,
    sprite: {
      front: String,
      back: String,
    },
    size: Number,
    weight: Number,
});

module.exports = mongoose.model(Pokemons, pokemonSchema);