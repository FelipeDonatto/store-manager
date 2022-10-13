const returnAll = {
  error: null,
  products: [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  },
  ],
  status: 200
}

const returnId = {
    error: null,
  products: [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  ],
  status: 200
}
const returnIdError = {
    error: true,
message: 'Product not found',
  status: 404
}

const returnNew = {
    error: null,
  products: [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  ],
  status: 201
}

module.exports = {
  returnAll,
  returnId,
  returnIdError,
  returnNew
}