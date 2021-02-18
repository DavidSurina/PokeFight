const jsonData = require("../data/pokedex.json");
const Pokemon = require("../models/Pokemon")


module.exports = {
  getAllPokemon: async (req, res) => {
    try {
      await Pokemon.
      await res.json({
        code: 200,
        operation: 'success',
        description: 'Poke data - all pokemon',
        data: jsonData,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
}