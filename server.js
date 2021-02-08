const express = require("express");
const app = express();

const port = 3000;

let jsonData = require('./pokedex.json')



app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
