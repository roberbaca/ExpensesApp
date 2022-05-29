const express = require("express");
const expensesController = require("../controllers/expense");

const router = express.Router();

router.get("/", expensesController.helloWorld); // para testeo

router.post("/add", expensesController.addExpense);

router.get("/all", expensesController.showAll);

router.get("/search", expensesController.searchByCategory);

router.get("/balance-by-category", expensesController.getBalanceByCategory);

router.get("/balance", expensesController.getBalance);

module.exports = router;
