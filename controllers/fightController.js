const Fight = require('../models/Fight');

module.exports = {
  getAllFights: async (req, res) => {
    try {
      const dbResult = await Fight.find({}).sort({date: "desc"});
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
  getLatestFights: async (req, res) => {
    try {
      const dbResult = await Fight.find({}).sort({date: "desc"}).limit(5);
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
    const { winner_id, looser_id } = req.body;
    try {
      await Fight.create({
        winner_id,
        looser_id,
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