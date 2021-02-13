const create = (User) => async ({ fullname, email, password }) => {
  const newUser = User({ fullname, email, password });
  return newUser.save();
};

module.exports = { create };
