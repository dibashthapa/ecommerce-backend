const updateOne = (User) => async ({ savedUser, token }) => {
  User.updateOne({ _id: savedUser._id }, { $push: { token: token } });
};

module.exports = { updateOne };
