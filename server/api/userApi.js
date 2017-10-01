const router = require("express").Router();
const controllers = require("../controllers");

router.get('/getTransactions', async function (req, res) {

    let transactions = await controllers.transactionController.findAll();
    res.json({results: transactions});

});

router.get('/getTransactionsFromBank', async function (req, res) {

    let noOfDays = req.body.noOfDays;
    let transactions = await controllers.transactionController.fetchAndInsert(noOfDays);
    res.json({results: transactions});

});

router.post('/feed', async function (req, res) {

    let feed = await controllers.feedController.create(req.body);
    res.json({result: feed})
});


router.get('/feed', async function (req, res) {

    let feeds = await controllers.feedController.findAll();
    res.json({results: feeds});

});


router.get('/getAccounts', async function (req, res) {

    let feeds = await controllers.accountController.findAll();
    res.json({results: feeds});

});





module.exports = router;
