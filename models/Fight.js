const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fightSchema = new Schema({
    winner_id: {type: Number, required: true},
    looser_id: {type: Number, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Fight", fightSchema);