const prisma = require("../utils/client");

// crear un gasto
const create = async (date, title, amount, categoryId) => {   

    try {
        const newExpense = await prisma.expense.create(
            {
            data: {      
                date: date,                
                title: title,                
                amount: amount,         
                category: {
                    connect: {
                        id: categoryId
                    }
                }                
            },           
        })        
      
        return (newExpense);        
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}

// obtenemos todos los gastos por categoria
const getExpensesByCategory = async (category) => { 

    try {
        const expenses = await prisma.expense.findMany({           
              where: {
                categoryId: category,
              },
              select: {
                title: true,
                amount: true,
                date: true
              },
        })            
       
        return (expenses);
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}


// obtenemos gasto total por categoria
const getTotalAmountByCategory = async (category) => {

    let total = 0;

    try {
        const expenses = await prisma.expense.findMany({           
              where: {
                categoryId: category,
              },
              select: {
                title: true,
                amount: true,
                date: true
              },
        })           
       
        for (let i = 0; i < expenses.length; i++) {
            total += expenses[i].amount;           ;
        }     
       
        return (`Total Amount in Category: $ ` + total);
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}

// obtenemos el listado completo
const getAllExpenses = async () => {
    try {
        const allExpenses = await prisma.expense.findMany();
        return allExpenses;
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}

// obtenemos el monto total gastado
const getTotalAmount = async () => {
    
    let totalAmount = 0;
    
    try {
        const totalExpenses = await prisma.expense.findMany();
       
        for (let i = 0; i < totalExpenses.length; i++) {
            totalAmount += totalExpenses[i].amount;           ;
        }     

       return ("Total Amount: $ " + totalAmount);
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}


module.exports = { create, getExpensesByCategory, getTotalAmount, getAllExpenses, getTotalAmountByCategory };