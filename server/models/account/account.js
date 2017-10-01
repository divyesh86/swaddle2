const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name: { type: String, required: true },
    accountNumber: { type: String, required: true },
    availableBalance: { type: Number, default: null },
    currentBalance: { type: Number, default: null},
    date : { type: Date, default: Date.now() }

});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
