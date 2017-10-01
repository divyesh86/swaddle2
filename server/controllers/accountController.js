const db = require("../models/index");

let findAll = async () => {
    try{
        return await db.Account
            .find()
    }catch(err){
        return ({errorMsg: err.message})
    }

};


let create = async(accountObject) => {

    try{
        return await db.Account
            .create(
                {
                    name: accountObject.name,
                    accountNumber: accountObject.accountNumber,
                    availableBalance: accountObject.availableBalance,
                    currentBalance: accountObject.currentBalance
                }
            );

    }catch(err){
        return ({errorMsg: err.message})
    }
};

module.exports = {findAll, create};
