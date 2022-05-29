const express = require("express");
const categoryController = require("../controllers/category");

const router = express.Router();

//  /api/category/add/
router.post("/add", categoryController.create);

// /api/category/all/
router.get("/all", categoryController.findAll);

module.exports = router;