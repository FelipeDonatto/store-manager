const express = require('express');
const { salesController } = require('../controllers');
const idValidator = require('../middlewares/idValitador');
const { salesValidator, checkProduct } = require('../middlewares/salesValidator');

const router = express.Router();

router.post('/',
salesValidator,
checkProduct,
salesController.listSale);

router.get('/', salesController.listAllSales);
router.get('/:id', idValidator, salesController.listSaleById);

module.exports = router;