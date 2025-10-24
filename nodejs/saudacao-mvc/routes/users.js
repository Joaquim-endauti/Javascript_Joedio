const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/",userController.index);
router.get("/login",userController.formularo);
router.post("/login",userController.login);

module.exports = router;
