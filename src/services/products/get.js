const logError = console.error;
const log = console.log;
let response = {};
const get = (infra) => async ({ page }) => {
  try {
    const foundProduct = await infra.findAll();
    const previous = parseInt(page) - 1;
    const start = previous ? previous * 10 : 0;
    const end = start + 10;
    const paginatedProduct = foundProduct.slice(start, end);
    console.log({ start: start, end: end });
    response['totalPages'] = Math.ceil(foundProduct.length / 10);
    //check if there are two queries i.e. page & size. And throw error
    if (page) response['paginatedProduct'] = paginatedProduct;
    return response;
  } catch (error) {
    logError(error.message);
    throw { message: error.message, status: 404 };
  }
};

module.exports = { get };
