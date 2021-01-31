const mongoose = require("mongoose");
const config = require("../../commons/config");
const { dbErrorHandler } = require("./errorHandler");

const log = console.log;
const init = async ({}) => {
  let connection;
  try {
    log("connecting db");
    await mongoose.connect(config.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: config.MONGO_POOL_SIZE || 1,
    });
    connection = mongoose.connection;

    log("DB connected successfully");
    // pass to error handler for future connection errors
    dbErrorHandler(connection);

    return connection;
  } catch (error) {
    throw error;
  }
};

module.exports = { init };
