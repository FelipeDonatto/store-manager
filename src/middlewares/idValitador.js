const { salesById } = require('../services/sales.services');

async function idValidator(req, res, next) {
    const { id } = req.params;
  const { sales } = await salesById(id);
  console.log(sales);
    if (sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
    }
    next();
}
module.exports = idValidator;