const logError = console.error;
const { logger } = require('../../../src/api/http/utility');
let response = {};
const get = (infra) => async ({ page }) => {
  try {
    const foundApparel = await infra.findAll();
    const previous = parseInt(page) - 1;
    const start = previous ? previous * 10 : 0;
    const end = start + 10;
    const paginatedApparel = foundApparel.slice(start, end);
    response['totalPages'] = Math.ceil(foundApparel.length / 10);
    //check if there are two queries i.e. page & size. And throw error
    if (page) response['paginatedApparel'] = paginatedApparel;
    return response;
  } catch (error) {
    logger.error(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { get };
