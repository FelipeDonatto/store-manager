const { productsModel } = require('../models');

const getAllProducts = async () => {
  const all = await productsModel.getAll();
  return { error: null, products: all, status: 200 };
};

const getProductById = async (id) => {
  const [byId] = await productsModel.getById(id);
  if (byId === undefined) {
  return { error: true, message: 'Product not found', status: 404 };
  }

  return { error: null, product: byId, status: 200 };
};

const getNewProduct = async (prodName) => {
  const newProd = await productsModel.insert(prodName);
  return { error: null, product: newProd, status: 201 };
};
const modifyProduct = async (id, name) => {
  const newProd = await productsModel.modify(id, name);
  return { error: null, product: newProd, status: 200 };
};

module.exports = {
  getAllProducts,
  getProductById,
  getNewProduct,
  modifyProduct,
};