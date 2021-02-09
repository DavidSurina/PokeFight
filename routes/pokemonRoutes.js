const express = require("express");
const router = express.Router();

const PokemonController = require("../controllers/pokemonController");

router.get("/:id/:info", PokemonController.getPokemonInfo);
router.get("/:id", PokemonController.getPokemonById);
router.get("/", PokemonController.getAllPokemon);

module.exports = router;