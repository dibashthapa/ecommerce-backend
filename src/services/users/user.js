const logError = console.error;
const log = console.log;
const { createToken } = require('../utility');
const user = (infra) => async ({ id }) => {
  try {
    const foundUser = await infra.findById({ id });
    const { _id, email } = foundUser;
    const token = await createToken({ email, userId: _id });

    return { foundUser, token };
  } catch (error) {
    logError(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { user };
