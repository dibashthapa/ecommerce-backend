const jwt = require("jsonwebtoken");
const { secretToken, jwtExpiry } = require("../../commons/config");

const createToken = async ({ email, userId }) => {
  const token = jwt.sign(
    {
      sub: userId,
      email: email,
      id: userId,
    },
    secretToken,
    { expiresIn: jwtExpiry }
  );
  return token;
};

module.exports = { createToken };
