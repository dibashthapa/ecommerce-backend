const { sendResponse } = require('../../utility');
const getProduct = (productService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { page } = req.query;

    const Product = await productService.get({ page });
    body = Product;
  } catch (error) {
    console.log(error);
    status = error.status || 500;
    headers = {};
    body = {};
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
