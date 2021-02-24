const logError = console.error;
const log = console.log;
const get = (infra) => async ({ page, size }) => {
  try {
    const foundProduct = await infra.findAll();
    const previous = parseInt(page) - 1;
    const start = previous ? previous * 10 : 0;
    const end = start ? start + 10 : foundProduct.length;
    const paginatedProduct = foundProduct.slice(start, end);

    //check if there are two queries i.e. page & size. And throw error
    if (page && size) throw new Error("A url can't have two queries page & size");
    if (size) return paginatedProduct.slice(0, size);
    return paginatedProduct;
  } catch (error) {
    logError(error.message);
    throw { message: error.message, status: 404 };
  }
};

module.exports = { get };
