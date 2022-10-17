const { salesModel } = require('../models');

const registerNewSale = async (products) => {
  const newSale = await salesModel.registerSale(products);
  return { error: null, saleId: newSale, status: 201 };
};
const allSales = async () => {
  const all = await salesModel.listAllSales();
  return { error: null, sales: all, status: 200 };
};
const salesById = async (id) => {
  const byId = await salesModel.listSaleById(id);
  return { error: null, sales: byId, status: 200 };
};

module.exports = {
  registerNewSale,
  allSales,
  salesById,
};