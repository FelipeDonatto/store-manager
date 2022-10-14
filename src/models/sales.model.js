const connection = require('./connection');

async function registerSale(products) {
  const [result] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  const { insertId } = result;
  products.forEach(async (sale) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, sale.productId, sale.quantity],
      );
    });
  return insertId;
}
module.exports = {
  registerSale,
};