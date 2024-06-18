const express = require('express');
const { addTransaction, getAllTransaction , editTransaction ,deleteTransaction } = require('../controllers/transactionController');

//router object
const router = express.Router();

//routes
// Add transactions (POST Method)
router.post("/addtransactions", addTransaction);
// Edit transactions (POST Method)
router.post("/edittransactions", editTransaction);
// Delete transactions(POST Method)
router.post("/deletetransactions", deleteTransaction);

// Get transactions (GET Method)
router.post("/gettransactions", getAllTransaction);

module.exports = router;
