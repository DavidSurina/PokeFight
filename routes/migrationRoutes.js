const express = require("express");
const router = express.Router();

const MigrationController = require("../controllers/migrationController");

router
  .route("/")
  .get(MigrationController.getAllPokemon)


module.exports = router;