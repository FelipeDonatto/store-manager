const express = require('express');
const { productsController } = require('../controllers');
const productValidator = require('../middlewares/productValidator');

const router = express.Router();

router.get('/', productsController.allProducts);
router.get('/:id', productsController.productById);
router.post('/', productValidator, productsController.newProduct);

module.exports = router;