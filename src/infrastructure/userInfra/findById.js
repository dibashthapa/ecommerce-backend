const findById = (User) => async ({ id }) => {
    return User.findById({ _id: id });
  };
  
  module.exports = { findById };
  