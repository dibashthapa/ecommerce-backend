const findOne = (User) => async ({ email }) => {
  return User.findOne({ email })
};

module.exports = { findOne };
