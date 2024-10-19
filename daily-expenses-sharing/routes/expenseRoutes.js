const express = require('express');
const { addExpense, getIndividualExpenses, getOverallExpenses, downloadBalanceSheet } = require('../controllers/expenseController');
const router = express.Router();

router.post('/add', addExpense);
router.get('/individual/:userId', getIndividualExpenses);
router.get('/overall', getOverallExpenses);
router.get('/download', downloadBalanceSheet);

module.exports = router;
