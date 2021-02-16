const logError = console.error;
const log = console.log;
const get = (infra) => async ({ page }) => {
  try {
    const foundProduct = await infra.findAll();
    const previous = parseInt(page) - 1;
    const start = previous * 10;
    const end = start + 10;
    const paginatedProduct = foundProduct.slice(start, end);
    if (page) {
      return paginatedProduct;
    }
    return foundProduct;
  } catch (error) {
    logError(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { get };
