const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { getById } = require('../../../src/models/products.model');
const { productsServices } = require('../../../src/services');
const { allProducts, newProduct } = require('./mocks/mockProducts');

describe('Testes de unidade do model de pessoas passageiras', function () {
  afterEach(sinon.restore);

  it('testa o retorno de todos produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModel.getAll();
    expect(result).to.be.deep.equal(allProducts);
  });
  it('testa o retorno de produtos por id', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts[0]]);
    const result = await productsModel.getById(1);
    expect(result).to.be.deep.equal(allProducts[0]);
  });
  it('testa o retorno de erro em produtos por id', async function () {
    sinon.stub(connection, 'execute').resolves([]);
    const result = await productsModel.getById(9999);
    expect(result).to.be.deep.equal(undefined);
  });
  // it('testa o retorno do new product', async function () {
  //   const insertId = 4;
  //   sinon.stub(connection, 'execute').resolves([{ insertId }]);
  //   // sinon.stub(productsServices, 'getProductById').resolves(newProduct);

  //   const result = await productsModel.insert('newprod');
  //   expect(result).to.be.deep.equal(newProduct);
  // });
});