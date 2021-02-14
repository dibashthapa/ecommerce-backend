const findAll = (Jewelry) => async () => {
  return Jewelry.find({});
};

module.exports = { findAll };
