module.exports = {
  apiPort: process.env.PORT || '3000',
  secretToken: process.env.SECRET_TOKEN,
  jwtExpiry: process.env.JWT_EXPIRY,
};
