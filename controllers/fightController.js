const Fight = require('../models/Fight');

module.exports = {
  getAllFights: async (req, res) => {
    let { limit } = req.query;
    limit = parseInt(limit);
    
    console.log(limit);
    try {
      let dbResult = await Fight.find({}).sort({date: "desc"});
      // if there is a query parameter limit the fight results are limited
      if(limit) dbResult = await Fight.find({}).sort({date: "desc"}).limit(limit);
      res.json({
        code: 200,
        operation: 'success',
        description: `fetched ${dbResult.length} Fights`,
        data: dbResult,
        msg: 'This is CORS-enabled for all origins!',
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  create: async (req, res) => {
    const { winner_id, winner_name, looser_id, looser_name} = req.body;
    try {
      await Fight.create({
        winner: {
          winner_id,
          winner_name,
        },
        looser: {
          looser_id,
          looser_name,
        },
      });
      res.json({
        code: 200,
        message: "Fight has been created successfully",
      });
    } catch (error) {
      console.log(Error(e));
      res.status(500).json({
        code: 500,
        message: e.message,
      });
    }
  },
};