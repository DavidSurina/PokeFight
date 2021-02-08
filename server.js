const express = require("express");
const app = express();

const port = 3000;
let jsonData = require('./pokedex.json');

app.get("/pokemon/:id/:info", (req,res) => {
})
app.get("/pokemon/:id", (req,res) => {})
app.get("/pokemon", async (req,res) => {
  try {
    
  }
  catch (e){
    console.log(e);
    res.sendStatus(404);
  }
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
