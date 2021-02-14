const { sendResponse } = require('../../utility');
const getApparel = (apparelService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { foundApparel } = await apparelService.get({});
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
