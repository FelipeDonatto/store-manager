const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const connection = require('../../../src/models/connection');
const app = require('../../../src/app');
const { returnAll, returnNew } = require('../controllers/controllers.mocks');
const { productsController } = require('../../../src/controllers');
const { productsModel } = require('../../../src/models');
const { getAllProducts, getProductById } = require('../../../src/services/products.services');

describe('testa os services', function () {
  afterEach(sinon.restore);
    it('', async function () {
    sinon.stub(productsModel, 'getAll').resolves(returnAll.products);
      const result = await getAllProducts();
    expect(result).to.be.deep.equal(returnAll)
  });
  
    it('', async function () {
    sinon.stub(productsModel, 'getById').resolves(returnAll.products);
      const result = await getAllProducts();
    expect(result).to.be.deep.equal(returnAll)
  });
  
  it('', async function () {
      const returnId = {
    error: null,
  product: 
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  status: 200
}
    sinon.stub(productsModel, 'getAll').resolves(returnId.products);
      const result = await getProductById(1);
    expect(result).to.be.deep.equal(returnId)
  });
  
  // it('', async function () {
  //   sinon.stub(productsModel, 'getById').resolves(returnId);
  //   expect(res.status).to.be.calledWith(200)
  // });
  
  // it('', async function () {
  //   sinon.stub(productsModel, 'insert').resolves(returnNew);
  //   await productsController.newProduct(req, res)
  //   expect(res.status).to.be.calledWith(201)
  // });
});