const express = require('express');
const { salesController } = require('../controllers');
const { salesValidator, checkProduct } = require('../middlewares/salesValidator');

const router = express.Router();

router.post('/',
salesValidator,
checkProduct,
salesController.listSale);

module.exports = router;