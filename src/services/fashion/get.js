const logError = console.error;
const log = console.log;
const get = (infra) => async ({ page }) => {
  try {
    const foundFashion = await infra.findAll();
    const previous = parseInt(page) - 1;
    const start = previous * 10;
    const end = start + 10;
    const paginatedFashion = foundFashion.slice(start, end);
    if (page) {
      return paginatedFashion;
    }
    return foundFashion;
  } catch (error) {
    logError(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { get };
