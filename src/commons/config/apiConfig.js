module.exports = {
  apiPort: process.env.API_PORT || "3000",
  secretToken: process.env.SECRET_TOKEN,
  jwtExpiry: process.env.JWT_EXPIRY,
};
