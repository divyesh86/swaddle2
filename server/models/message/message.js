const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    transactionId: { type: String, required: true },
    userId : { type: String, required: true },
    date: { type: Date, required: true },
    pending: { type: Boolean, required: true},
    address: { type: String, required: true },
    city : { type: String, required: true },
    phone : { type: String, required:true },
    body: { type: String, required: true }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
