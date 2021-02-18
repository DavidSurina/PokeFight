const express = require("express");
const router = express.Router();

const PokemonController = require("../controllers/pokemonController");

router
  .route("/")
  .get(PokemonController.getAllPokemon)

router
  .route("/:id")
  .get(PokemonController.getPokemonById);

router
  .route("/:id/:info")
  .get(PokemonController.getPokemonInfo)

/* router.get("/:id/:info", PokemonController.getPokemonInfo);
router.get("/:id", PokemonController.getPokemonById);
router.get("/", PokemonController.getAllPokemon); */

module.exports = router;