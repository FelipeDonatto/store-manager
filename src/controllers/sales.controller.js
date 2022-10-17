const { registerNewSale, allSales, salesById } = require('../services/sales.services');

const listSale = async (req, res) => {
  const products = req.body;
  const sale = await registerNewSale(products);
  return res.status(sale.status).json({ itemsSold: products, id: sale.saleId });
};
const listAllSales = async (_req, res) => {
  const sales = await allSales();
  return res.status(sales.status).json(sales.sales);
};
const listSaleById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesById(id);
  return res.status(sales.status).json(sales.sales);
};

module.exports = { listSale, listAllSales, listSaleById };