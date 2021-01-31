const { sendResponse } = require('../../utility');
const user = (userService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { userId } = req.params;
    const { foundUser, token } = await userService.user({ id: userId });
    const { role } = foundUser;
    headers = {
      'x-curl-token': token,
    };
    status = 200;

    const { id } = req.user;

    if (userId != id && role.toLowerCase() != "admin") {
      throw { status: 403 };
    } else {
      body = foundUser;
    }
    

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

module.exports = { user };
