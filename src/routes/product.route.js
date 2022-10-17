const express = require('express');
const { productsController } = require('../controllers');
const { productValidator, verifyProductId } = require('../middlewares/productValidator');

const router = express.Router();

router.get('/', productsController.allProducts);
router.get('/:id', productsController.productById);
router.post('/', productValidator, productsController.newProduct);
router.put('/:id', verifyProductId, productValidator, productsController.modifyProduct);

module.exports = router;