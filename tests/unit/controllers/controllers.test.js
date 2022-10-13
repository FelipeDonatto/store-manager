const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const connection = require('../../../src/models/connection');
const app = require('../../../src/app');
const { productsServices } = require('../../../src/services');
const { returnAll, returnId, returnNew } = require('./controllers.mocks');
const { productsController } = require('../../../src/controllers');

describe('testa os controllers', function () {
  afterEach(sinon.restore);

  it('', async function () {
    const req = {}
    const res = {}
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()
    sinon.stub(productsServices, 'getAllProducts').resolves(returnAll);
    await productsController.allProducts(req, res)
    expect(res.status).to.be.calledWith(200)
  });
  it('', async function () {
    const req = {params: {id: 1}}
    const res = {}
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()
    sinon.stub(productsServices, 'getProductById').resolves(returnId);
    await productsController.productById(req, res)
    expect(res.status).to.be.calledWith(200)
  });
  it('', async function () {
    const req = {body: {name: 'test'}}
    const res = {}
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()
    sinon.stub(productsServices, 'getNewProduct').resolves(returnNew);
    await productsController.newProduct(req, res)
    expect(res.status).to.be.calledWith(201)
  });
});