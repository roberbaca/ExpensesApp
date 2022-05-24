const express = require("express");
const expensesController = require("../controllers/expense");

const router = express.Router();

router.get("/", expensesController.helloWorld); // para testeo

router.post("/add", expensesController.addExpense);

//router.post("/login", userController.loginUser);


//router.get("/rank", userController.getAllRankedUsers);

//router.get("/data", userController.getAllUsersData);

//router.patch("/", userController.updateScore);




module.exports = router;
