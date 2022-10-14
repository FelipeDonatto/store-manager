const { salesModel } = require('../models');

const registerNewSale = async (products) => {
  const newSale = await salesModel.registerSale(products);
  return { error: null, saleId: newSale, status: 201 };
};

module.exports = {
  registerNewSale,
};