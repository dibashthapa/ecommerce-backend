const { sendResponse } = require('../../utility');
const getFashion = (fashionService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { page } = req.query;
    const foundFashion = await fashionService.get({ page });
    body = foundFashion;
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

module.exports = { getFashion };
