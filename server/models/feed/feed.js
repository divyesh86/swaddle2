const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    userName: { type: String, required: true },
    date: { type: Date, required: true },
    address: { type: String, required: true },
    city : { type: String, required: true },
    notes: { type: String, required: true }
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
