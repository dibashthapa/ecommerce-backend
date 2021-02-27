const { sendResponse, logger } = require('../../utility');
const getProduct = (productService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { page, size } = req.query;
    const Product = await productService.get({ page, size });
    body = Product;
  } catch (error) {
    status = error.status || 500;
    headers = {};
    body = { message: error.message };
  } finally {
    sendResponse({
      responseWriter,
      body,
      status,
      headers,
    });
  }
};

module.exports = { getProduct };
