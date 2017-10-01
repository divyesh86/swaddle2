const db = require("../models/index");

let findAll = async () => {
    try{
        return await db.User
            .find()
    }catch(err){
        return ({errorMsg: err.message})
    }

};


let create = async(userObject) => {

    try{
        return await db.User
            .create(
                {
                    name: userObject.name,
                    accountNumber: userObject.email,
                    availableBalance: userObject.password,
                    currentBalance: userObject.phone
                }
            );

    }catch(err){
        return ({errorMsg: err.message})
    }
};

module.exports = {findAll, create};
