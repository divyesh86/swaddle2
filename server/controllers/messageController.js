const db = require("../models/index");
const messageService = require("../services/messageService");


let create = async(messageObject) => {

    try{
        return await db.Message
            .create(
                {
                    amount: messageObject.amount,
                    name: messageObject.name,
                    transactionId: messageObject.transactionId,
                    accountId : messageObject.accountId,
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



let findLastMessage  = async (accountId, transaction) => {
    try{
        return await db.Message
            .find({$match: { accountId : accountId, transactionId: transaction.transaction_id}})
    }catch(err){
        return ({errorMsg: err.message})
    }
};

let sendMessage = async (user, accountId, transaction) => {
    try{
       let result = await findLastMessage(accountId, transaction.transaction_id);
       if(!result){

           let messageBody = await messageService.createMessageBody(transaction);
           let sendMessage = await messageService.sendMessage(messageBody, user.phone);

           let messageObject = {...user, ...transaction};
           return await this.create(messageObject);

       }
    }catch(err){
        return ({errorMsg: err.message})
    }

}


module.exports = { create };