const db = require("../models/index");
const utils = require("../utils/jsonToString");
const transactionController = require('./transactionController');


let findLastTransaction  = async (accountId) => {
    try{
        return await db.Updates
            .find({ $sort: { _id : -1 }}, {$match: { accountId : accountId }}, { $limit : 1})
    }catch(err){
        return ({errorMsg: err.message})
    }
};

let insertOrUpdateTransaction = async(accountId, transaction) => {

    try{

        let result = await findLastTransaction(accountId);

        if(!result){
            return await transactionController.insertTransaction(transaction)
        } else {

           return await db.Updates.update (
                {
                    accountID: accountId
                },
                {
                    $set: {
                        transactionId: transaction.transaction_id
                    }
                }
           )

        }


    }catch(err){
        return ({errorMsg: err.message})
    }
};



module.exports = {findLastTransaction, insertOrUpdateTransaction};