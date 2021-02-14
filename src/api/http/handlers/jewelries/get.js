const { sendResponse } = require('../../utility');
const getJewelry = (jewelryService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { foundJewelry } = await jewelryService.get({});
    body = foundJewelry;
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

module.exports = { getJewelry };
