const express = require("express");
const app = express();
const cors = require('cors');

const port = 3000;
let jsonData = require('./pokedex.json');

app.use(cors())

app.get("/pokemon/:id/:info", async(req,res) => {
  try {
    const { id, info } = req.params;
    
    const pokemon = jsonData.filter(pokemon => pokemon.id.toString() === id);
    
    await res.json({
      code: 200,
      operation: "success",
      description: "Poke data",
      data: pokemon[0][info],
      msg: 'This is CORS-enabled for all origins!'
    });
  }
  catch (e){
    console.log(e);
    res.sendStatus(404);
  }
})

app.get("/pokemon/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const pokemon = jsonData.filter(pokemon => pokemon.id.toString() === id);
    console.log(pokemon)

    await res.json({
      code: 200,
      operation: "success",
      description: "Poke data",
      data: pokemon,
      msg: 'This is CORS-enabled for all origins!'
    });
  }
  catch (e){
    console.log(e);
    res.sendStatus(404);
  }
})

app.get("/pokemon", async (req,res) => {
  try {
    await res.json({
      code: 200,
      operation: "success",
      description: "Poke data",
      data: jsonData,
      msg: 'This is CORS-enabled for all origins!'
    });
  }
  catch (e){
    console.log(e);
    res.sendStatus(404);
  }
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
