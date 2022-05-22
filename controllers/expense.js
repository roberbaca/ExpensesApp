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
        const title = req.body.title;
        //const date = req.body.date;
        const amount = req.body.amount;
        //const category = req.body.category;

        const newExpense = await expense.create( title, amount );
        res.send(newExpense);
    } catch(error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error.message);
    }
}


module.exports = { helloWorld, addExpense };