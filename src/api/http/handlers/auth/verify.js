const { sendResponse } = require('../../utility');
const { secretToken } = require('../../../../commons/config');
const jwt = require('jsonwebtoken');
const verify = () => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const token = req.headers['authorization'].split(' ')[1];
    const decoded = jwt.verify(token, secretToken);
    status = 200;
  } catch (error) {
    status = 401;
    headers = {};
    body = { error: error.message };
  } finally {
    sendResponse({
      responseWriter,
      body,
      status,
      headers,
    });
  }
};

module.exports = { verify };
