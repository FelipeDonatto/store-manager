const { productsServices } = require('../services');

const allProducts = async (_req, res) => {
  const all = await productsServices.getAllProducts();
  res.status(all.status).json(all.products);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const byId = await productsServices.getProductById(id);
  const { error } = byId;
  if (error) {
    res.status(byId.status).json({ message: byId.message });
  }
  res.status(byId.status).json(byId.product);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const newP = await productsServices.getNewProduct(name);
  res.status(newP.status).json(newP.product);
};

const modifyProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const modifiedP = await productsServices.modifyProduct(id, name);
  res.status(modifiedP.status).json(modifiedP.product);
};

module.exports = {
  allProducts,
  productById,
  newProduct,
  modifyProduct,
};