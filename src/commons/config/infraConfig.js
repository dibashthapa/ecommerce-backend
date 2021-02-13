require('dotenv').config();

module.exports = {
  MONGO_DB_URL: process.env.MONGO_DB_URL || 'mongodb://localhost/ecommerce',
};
