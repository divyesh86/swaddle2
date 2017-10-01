const db = require("../models/index");


let create = async(messageObject) => {

    try{
        return await db.Message
            .create(
                {
                    amount: messageObject.amount,
                    name: messageObject.name,
                    transactionId: messageObject.transactionId,
                    userId: messageObject.userId,
                    date: messageObject.date,
                    pending: messageObject.pending,
                    address: messageObject.address,
                    city: messageObject.city,
                    phone: messageObject.phone,
                    body: messageObject.body
                }
            );

    }catch(err){
        return ({errorMsg: err.message})
    }
};

module.exports = { create };