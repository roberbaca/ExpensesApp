const prisma = require("../utils/client");

// crear un gasto
const create = async (title, amount) => {
    try {
        const newExpense = await prisma.expense.create({
            data: {               
                title: title,
                //date: date,
                amount: amount,   
                //category: category,
            },           
        })        
      
        return (newExpense);
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { create };