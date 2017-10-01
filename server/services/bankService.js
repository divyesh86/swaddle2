let axios = require('axios');
let config = require('../config/index');
let client = require('./client');
let moment = require('moment');
let utils = require('../utils');

let getTransactions = async function(noOfDays){
    try{

        let startDate = moment().subtract(noOfDays, 'days').format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        return await client.getTransactions(config.ACCESS_TOKEN, startDate, endDate, {
            count: 250,
            offset: 0,
        });

    }catch (err){
        return ({errorMsg: err.message});
    }

};


let getAccounts = async function(){
    try{

        let results =  await client.getAuth(config.ACCESS_TOKEN);
        return results.accounts;

    }catch (err){
        return ({errorMsg: err.message});
    }

};



module.exports = {getTransactions, getAccounts};