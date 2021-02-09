const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require();


dotenv.config();
const port = 3000;

const pokemonRoutes = require('./routes/pokemonRoutes');

app.use(cors());

app.use("/pokemon", pokemonRoutes);
app.get("/", (req, res) => res.send("Welcome"));

app.listen(port, () =>
  console.log(`Server on, listening at http://localhost:${port}`)
);