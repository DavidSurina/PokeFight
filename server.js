const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

const pokemonRoutes = require('./routes/pokemonRoutes');

app.use(cors());

app.use("/pokemon", pokemonRoutes);
app.get("/", (req, res) => res.send("Welcome"));

app.listen(port, () =>
  console.log(`Server on, listening at http://localhost:${port}`)
);