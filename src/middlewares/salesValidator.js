const { getAllProducts } = require('../services/products.services');

async function checkProduct(req, res, next) {
  const { products } = await getAllProducts();
  const productsIds = products.map((e) => e.id);
  const checkBody = req.body.map((e) => e.productId);
  const validate = checkBody.map((id) => productsIds.includes(id)).some((e) => e === false);

  if (validate) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
}

function salesValidator(req, res, next) {
  const products = req.body;
  const verifyQuantitys = products.some((e) => e.quantity === undefined);
  const quantityHigherThanOne = products.every((e) => Number(e.quantity) >= 1);
  const verifyIds = products.some((e) => e.productId === undefined);
   if (verifyIds) {
      return res.status(400)
        .json({ message: '"productId" is required' });
        }
    if (verifyQuantitys) {
      return res.status(400)
        .json({ message: '"quantity" is required' });
        }
    if (!quantityHigherThanOne) {
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  next();
}

module.exports = {
  salesValidator,
  checkProduct,
};