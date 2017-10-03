const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    accountId: { type: String, required: true },
    transactionId : { type : String, required: true},
    timestamp : {type: String, required: true }
});

const Updates = mongoose.model("Updates", updateSchema);

module.exports = Updates;
