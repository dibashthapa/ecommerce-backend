require('dotenv').config();

module.exports = {
  MONGO_DB_URL: process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/ecommerce',
};
