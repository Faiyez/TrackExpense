const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res, next) => {
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    }
    catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addTransactions = async (req, res, next) => {
    try{
        const {text, amount} = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(200).json({
            success: true,
            data: transaction
        });
    }
    catch(error){

    }
}

exports.deleteTransactions = async (req, res, next) => {
    res.send("Delete Transactions");
}