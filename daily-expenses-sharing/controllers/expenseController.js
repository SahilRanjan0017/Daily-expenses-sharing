const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
    const { description, totalAmount, participants, splitMethod } = req.body;
    try {
        const expense = new Expense({ description, totalAmount, participants, splitMethod });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getIndividualExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.userId': req.params.userId });
        res.json(expenses);
    } catch (error) {
        res.status(404).json({ message: 'No expenses found for this user' });
    }
};

exports.getOverallExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenses' });
    }
};

exports.downloadBalanceSheet = async (req, res) => {
    // Implement balance sheet generation logic using pdfkit
    res.json({ message: "Download balance sheet" });
};
