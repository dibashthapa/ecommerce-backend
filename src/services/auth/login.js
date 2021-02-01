const { compare, createToken, hash } = require('../utility/');
const logError = console.error;
const log = console.log;
const login = (infra) => async ({ email, password }) => {
  // get the user from the user table
  // get the password field, which contains hashed password
  // hash password from the request
  // compare both hashes
  const errors = [];

  try {
    if (!email) {
      errors.push('email is required');
    }
    if (!password) {
      errors.push('password is required');
    }
    if (errors.length > 0) {
      throw { message: errors.join(','), status: 200 };
    }

    const foundUser = await infra.findOne({ email });

    if (!foundUser) throw { message: 'User is not registered', status: 200 };
    const userEmail = foundUser.email;
    const userPassword = foundUser.password;
    const id = foundUser._id;

    const verifyPassword = await compare(password, userPassword, 'testHash');

    if (!verifyPassword) throw { message: 'Password is not correct', status: 200 };
    const token = await createToken({ email: userEmail, userId: id });
    await infra.updateOne({ savedUser: foundUser, token });
    return { token };
  } catch (error) {
    logError(error);
    throw { error, status: 200 };
  }
};

module.exports = { login };
