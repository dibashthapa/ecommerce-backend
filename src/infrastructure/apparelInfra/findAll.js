const findAll = (Apparel) => async () => {
  return Apparel.find({});
};

module.exports = { findAll };
