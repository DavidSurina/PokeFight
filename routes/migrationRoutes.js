const express = require("express");
const router = express.Router();

const { getAllPokemon } = require("../controllers/migrationController");

/* router
  .route("/")
  .get(MigrationController.getAllPokemon) */


module.exports = router;