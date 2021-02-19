const Pokemon = require('../models/Pokemon');


module.exports = {
  getAllPokemon: async (req, res) => {
    try {
      const dbResult = await Pokemon.find({}).sort({id: "asc"});
      res.json({
        code: 200,
        operation: 'success',
        description: `fetched ${dbResult.length} Pokemons`,
        data: dbResult,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getPokemonById: async (req, res) => {
    try {
      const { id } = req.params;
      const dbResult = await Pokemon.find({ id: parseInt(id) });
      if(!dbResult.length) throw {
        status: 404,
        operation: "not found",
        message: ` Pokemon with the ID ${id} was not found`,
      };
      res.json({
        code: 200,
        operation: 'success',
        description: `fetch Pokemon with the ID ${id}`,
        data: dbResult,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getPokemonInfo: async (req, res) => {
    const { id, info } = req.params;
    try {
      const dbResult = await Pokemon.find({ id: parseInt(id) });
      if(!dbResult.length) throw {
        status: 404,
        operation: "not found",
        message: ` Pokemon with the ID ${id} was not found`,
      };
      res.json({
        code: 200,
        operation: 'success',
        description: `fetch ${info}s of the Pokemon with the ID ${id}`,
        data: dbResult[0][info],
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};