const jsonData = require('../data/pokedex.json');


module.exports = {
  getAllPokemon: async (req, res) => {
    try {
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
  getPokemonById: async (req, res) => {
    try {
      const { id } = req.params;
      const pokemon = jsonData.filter(
        (pokemon) => pokemon.id.toString() === id
      );
      console.log(pokemon);

      await res.json({
        code: 200,
        operation: 'success',
        description: `Poke data - selected by id #${id}`,
        data: pokemon,
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
      const pokemon = jsonData.filter(
        (pokemon) => pokemon.id.toString() === id
      );

      await res.json({
        code: 200,
        operation: 'success',
        description: 'Poke data',
        data: pokemon[0][info],
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};