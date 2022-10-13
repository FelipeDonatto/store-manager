const express = require('express');
const productValidator = require('./middlewares/productValidator');
const { productsModel } = require('./models');

const app = express();
app.use(express.json());

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

app.post('/products', productValidator, async (req, res) => {
  const { name } = req.body;
  const newPr = await productsModel.insert(name);

  return res.status(201).json(newPr);
});

module.exports = app;