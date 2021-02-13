const { hash, createToken } = require('../utility');
const log = console.log;
const logError = console.error;
const register = (infra) => async ({
  fullname,
  email,

  password,
}) => {
  const errors = [];
  try {
    if (!email) {
      errors.push('email is required');
    }

    if (!fullname) {
      errors.push('fullname is required');
    }
    if (!password) {
      errors.push('password is required');
    }

    const foundEmail = await infra.findOne({ email });

    if (foundEmail) {
      errors.push('Email is already registered');
    }
    if (errors.length > 0) {
      throw { message: errors.join(','), status: 400 };
    }

    const hashedPassword = await hash(password, 'testHash');
    const savedUser = await infra.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const userId = savedUser._id;
    const userEmail = savedUser.email;
    const token = createToken({ email: userEmail, userId });
    await infra.updateOne({ savedUser, token });
    return { token };
  } catch (error) {
    logError(error);
    throw { message: error.message, status: error.status };
  }
};

module.exports = { register };
