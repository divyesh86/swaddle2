const db = require("../models/index");

let findAll = async () => {
    try{
        return await db.Feed
            .find()
    }catch(err){
        return ({errorMsg: err.message})
    }

};


let create = async(feedObject) => {

    try{
        return await db.Feed
            .create(
                {
                    amount: feedObject.amount,
                    name: feedObject.name,
                    userName: feedObject.userName,
                    date: feedObject.date,
                    address: feedObject.address,
                    city: feedObject.city,
                    notes: feedObject.notes,
                    transactionId: feedObject.transactionId
                }
            );

    }catch(err){
        return ({errorMsg: err.message})
    }
};

module.exports = {findAll, create};