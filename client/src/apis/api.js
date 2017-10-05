import axios from "axios";


export default {

    login: async function(data) {
        console.log(data);
        let result = await axios.get("/api/login", {params: {title: data.title, startYear: data.startYear, endYear: data.endYear}});
        console.log(result);
        return result;
    },

    signup: async function(data) {
        console.log(data);
        let result = await axios.get("/api/login", {params: {title: data.title, startYear: data.startYear, endYear: data.endYear}});
        console.log(result);
        return result;
    },

    logout: async function(data) {
        console.log(data);
        let result = await axios.get("/api/login", {params: {title: data.title, startYear: data.startYear, endYear: data.endYear}});
        console.log(result);
        return result;
    },


    //Get transactions
    getTransactions: async function(data) {
        console.log(data);
        let result = await axios.get("/api/transactions", {params: {title: data.title, startYear: data.startYear, endYear: data.endYear}});
        console.log(result);
        return result;
    },


    //Update transaction
    updateTransaction: async function(articleData) {
        console.log(articleData);
        let result = await axios.post("/api/transactions", {articleData});
        console.log(result);
        return result;
    }
};
