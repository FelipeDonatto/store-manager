const { getById } = require('../models/products.model');

function productValidator(req, res, next) {
    const { name } = req.body;
    const minLen = 5;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
        }
    if (name.length < minLen) {
      return res.status(422)
        .json({ message: '"name" length must be at least 5 characters long' });
        }

    next();
}

async function verifyProductId(req, res, next) {
  const { id } = req.params;
  const product = await getById(id);
  console.log(product);
    if (product.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
    }
    next();
}
module.exports = { productValidator, verifyProductId };