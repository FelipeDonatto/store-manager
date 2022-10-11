const express = require('express');
const { productsModel } = require('./models');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.get('/products', async (_request, response) => {
  const results = await productsModel.getAll();
  if (results.length !== 0) {
  return response.status(200).json(results);
  }
});

app.get('/products/:id', async (request, response) => {
  const { id } = request.params;
  const results = await productsModel.getById(id);
  if (results.length !== 0) {
  return response.status(200).json(results[0]);
  } 
    return response.status(404).json({ message: 'Product not found' });
});

module.exports = app;