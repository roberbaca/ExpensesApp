const expense = require("../models/expense");

// para testeo:
const helloWorld = async (req, res) => {
    try {
        res.send("Hello World!");       

    } catch(error){
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}

// Se agrega un nuevo gasto
const addExpense = async (req, res) => {
    try {        
        const date = req.body.date;
        const title = req.body.title;
        const amount = req.body.amount;
        const category = req.body.category;

        const newExpense = await expense.create( date, title, amount, category );
        res.send(newExpense);
    } catch(error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}

// Se busca todos los gastos por categoria
const searchByCategory = async (req, res) => {
    try {
        const category = req.body.category;
        const getExpenses = await expense.getExpensesByCategory(category);
        res.send(getExpenses);
    } catch(error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}

// Se busca monto total por categoria
const getBalanceByCategory = async (req, res) => {
    try {
        const category = req.body.category;
        const getBalance = await expense.getTotalAmountByCategory(category);
        res.send(getBalance);
    } catch(error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}



// mostrar todo el listado de gastos
const showAll = async (req, res) => {
    try {        
        const allExpenses = await expense.getAllExpenses();
        res.send(allExpenses);
    } catch(error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}

// Muestra la suma total de gastos
const getBalance = async (req, res) => {
    try {        
        const total = await expense.getTotalAmount();
        res.send(total);
    } catch(error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}



module.exports = { helloWorld, addExpense, searchByCategory, getBalance, showAll, getBalanceByCategory };