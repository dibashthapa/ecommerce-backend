const dbErrorHandler = (connection) => {
  connection.on("error", (err) => {
    console.error(err);
    process.exit(0);
  });
};

module.exports = { dbErrorHandler };
