const findAll = (Products) => async () => {
  return Products.find({});
};

module.exports = { findAll };
