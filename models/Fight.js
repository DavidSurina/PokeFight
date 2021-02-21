const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fightSchema = new Schema({
    date: {type: Date, default: Date.now},
    winner: {
      winner_id: {type: Number, required: true},
      winner_name: {type: String},
    },
    looser: {
      looser_id: {type: Number, required: true},
      looser_name:  {type: String},
    }
});

module.exports = mongoose.model("Fight", fightSchema);