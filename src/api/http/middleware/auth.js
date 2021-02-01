const { sendResponse } = require('../utility');
const { secretToken } = require('../../../commons/config');
const jwt = require('jsonwebtoken');
const log = console.log;
const logError = console.error;
const checkAuth = async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;
  req.user = {};
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const decoded = jwt.verify(token, secretToken);
    const { email, id } = decoded;
    req.user = { email, id };
    req.headers = {};
    next();
  } catch (error) {
    // Only send response on error
    // While, on success , move to the next url , so no response from middleware
    status = 401;
    logError(error.message);
    sendResponse({
      responseWriter,
      body,
      headers,
      status,
    });
  }
};

module.exports = { checkAuth };
