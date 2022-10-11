const connection = require('./connection');

async function getAll() {
  const [results] = await connection.execute('SELECT * FROM StoreManager.products;');
  return results;
}

async function getById(id) {
  const [results] = await connection
    .execute(`SELECT * FROM StoreManager.products WHERE id = ${id};`);
  return results;
}

module.exports = {
  getAll,
  getById,
};