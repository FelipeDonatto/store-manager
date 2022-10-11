const connection = require('./connection');

async function getAll(_req, res) {
  const [results] = await connection.execute('SELECT * FROM StoreManager.products;');
  if (results.length !== 0) {
  return res.status(200).json(results);
  }
}

async function getById(req, res) {
  const [results] = await connection
    .execute(`SELECT * FROM StoreManager.products WHERE id = ${req.params.id};`);
  if (results.length !== 0) {
  return res.status(200).json(results[0]);
  } 
    return res.status(404).json({ message: 'Product not found' });
}

module.exports = {
  getAll,
  getById,
};