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
    req.user = { email, id, token };
    req.headers = {};
    next();
  } catch (error) {
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
