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
async function modify(id, name) {
await connection.execute(
    `UPDATE StoreManager.products SET \`name\` = '${name}' WHERE id = ${id};`,
  );

  const [result] = await getById(id);
  return result;
}
module.exports = {
  getAll,
  getById,
  insert,
  modify,
};