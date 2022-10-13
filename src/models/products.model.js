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

async function insert(product) {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO \`StoreManager\`.\`products\` (\`name\`) VALUES ('${product}')`,
  );
  const [newProduct] = await getById(insertId);
  return newProduct;
}

module.exports = {
  getAll,
  getById,
  insert,
};