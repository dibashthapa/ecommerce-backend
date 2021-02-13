const mongoDB = require('./mongoDB');
const root = require('./rootInfra');
const user = require('./userInfra/');
const User = require('../models/user');
const init = async ({}) => {
  const db = await mongoDB.init({});
  const rootInfra = await root.init({ db });
  const userInfra = await user.init({ User });

  return {
    rootInfra,
    userInfra,
  };
};

module.exports = { init };
