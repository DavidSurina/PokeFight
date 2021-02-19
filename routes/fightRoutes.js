const express = require("express");
const router = express.Router();

const fightController = require("../controllers/fightController");


router
  .route("/")
  .get(fightController.getAllFights);

router
  .route("/create")
  .post(fightController.create)


module.exports = router;