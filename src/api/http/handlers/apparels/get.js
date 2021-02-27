const { sendResponse } = require('../../utility');
const getApparel = (apparelService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { page } = req.query;
    const foundApparel = await apparelService.get({ page });
    body = foundApparel;
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

module.exports = { getApparel };
