const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// import routes
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

// ----- cores ------
app.use(cors());

// ----- database connection -----
const { DBUSER, DBNAME, DBPASS } = process.env;
const mongoDB = `mongodb+srv://${DBUSER}:${DBPASS}@pokefight.y6ugu.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// ----- bodyparsing -----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----- routes ------
app.use("/pokemons", pokemonRoutes);
app.get("/", (req, res) => res.send("Welcome"));

// ----- server -----
const { PORT } = process.env || 4000;
app.listen(PORT, () =>
  console.log(`Server on, listening at http://localhost:${PORT}`)
);