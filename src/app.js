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

app.get('/products', async (request, response) => productsModel.getAll(request, response));

app.get('/products/:id', (request, response) => { productsModel.getById(request, response); });

module.exports = app;