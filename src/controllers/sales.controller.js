const { registerNewSale } = require('../services/sales.services');

const listSale = async (req, res) => {
  const products = req.body;
  const sale = await registerNewSale(products);
  return res.status(sale.status).json({ itemsSold: products, id: sale.saleId });
};

module.exports = { listSale };