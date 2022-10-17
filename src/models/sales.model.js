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

async function listAllSales() {
  const [result] = await connection.execute(
    `SELECT sale_id as saleId, product_id as productId,
     quantity, \`date\` FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales AS t2 
    ON sale_id = t2.id;`,
  );
  return result;
}

async function listSaleById(id) {
  const [result] = await connection.execute(
    `SELECT product_id as productId,
     quantity, \`date\` FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales AS t2 
    ON sale_id = t2.id
    WHERE sale_id = ${id};`,
  );
  return result;
}

module.exports = {
  registerSale,
  listAllSales,
  listSaleById,
};