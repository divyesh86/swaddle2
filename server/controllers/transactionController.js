const db = require("../models/index");
const utils = require("../utils/jsonToString");
const bankService = require("../services/bankService");

let findAll = async () => {
    try{
        return await db.Transaction
            .find()
    }catch(err){
        return ({errorMsg: err.message})
    }

};

let findByTransaction = async (transactionId) => {
    try{
        return await db.Transaction
            .find({
                $where: function () {
                    return this.transactionId === transactionId
                }
            });
    }catch(err){
        return ({errorMsg: err.message})
    }
};

let insertTransaction = async(transaction) => {

    try{

        let result = await findByTransaction(transaction.transaction_id);

        if(!result){
            return await db.Transaction
                .create(
                    {
                        transactionId: transaction.transaction_id,
                        amount: transaction.amount,
                        name: transaction.name,
                        pending: transaction.pending,
                        date: transaction.date,
                        address: utils.convert.jsonToString(transaction.location),
                        notes: null
                    }
                );
        }


    }catch(err){
        return ({errorMsg: err.message})
    }
};

let updateTransaction = async(transaction) => {

    try{

        let result = await findByTransaction(transaction.transaction_id);

        if(!result){
            return await db.Transaction
                .create(
                    {
                        transactionId: transaction.transaction_id,
                        amount: transaction.amount,
                        name: transaction.name,
                        pending: transaction.pending,
                        date: transaction.date,
                        address: utils.convert.jsonToString(transaction.location),
                        notes: null
                    }
                );
        }


    }catch(err){
        return ({errorMsg: err.message})
    }
};

let insertTransactionList = async(transactionList) => {

    try{
        transactionList.map(async function(transaction) {
            await insertTransaction(transaction);
        });
    }catch(err){
        return ({errorMsg: err.message})
    }
};


let fetchAndInsert = async(noOfDays) => {

    try{
        let transactions = await bankService.getTransactions(noOfDays);
        return await insertTransactionList(transactions);
    }catch (err){
        return ({errorMsg: err.message});
    }
};





module.exports = {fetchAndInsert, findAll, insertTransaction};