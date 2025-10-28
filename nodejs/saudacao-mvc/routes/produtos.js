const express = require("express");
const router = express.Router();
const siteController = require('../controllers/siteController');
const produtosController = require('../controllers/produtosController');

router.get("/cadastrar",produtosController.formCadProd);
router.post("/cadastrar",produtosController.cadastrar);

router.get("/",siteController.produtos);
router.get("/camisetas",siteController.camisetas);

module.exports = router;
