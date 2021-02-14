const findAll = (Fashion) => async () => {
  return Fashion.find({});
};

module.exports = { findAll };
