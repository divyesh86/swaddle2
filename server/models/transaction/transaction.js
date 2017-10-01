const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    accountId: { type: String, required: true },
    pending: {type: Booleand, default: false},
    userName: { type: String, required: true },
    date: { type: Date, required: true },
    address: { type: String, required: true },
    city : { type: String, required: true },
    notes: { type: String, required: true }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
