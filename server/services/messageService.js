let axios = require('axios');
let config = require('../config/index');
let client = require('./client');
let moment = require('moment');
let utils = require('../utils');
let twilio = require('twilio');
let twilioClient = new twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);



let sendMessage = async (body, to) => {
    try{


        return await twilioClient.messages.create({
            body: body,
            to: to,
            from: config.TWILIO_PHONE_NUMBER// From a valid Twilio number
        });

    }catch (err){
        return ({errorMsg: err.message});
    }

};


let createMessageBody = async (transaction) => {
    try{

        return utils.convert.toString(transaction.amount, transaction.name, transaction.address, transaction.city);

    }catch (err){
        return ({errorMsg: err.message});
    }

};





module.exports = {sendMessage, createMessageBody};