const mongoDB = require('./mongoDB');
const root = require('./rootInfra');
const apparel = require('./apparelInfra');
const user = require('./userInfra/');
const fashion = require('./fashionInfra');
const jewelry = require('./jewelryInfra');
const User = require('../models/user');
const Apparel = require('../models/apparels');
const Fashion = require('../models/fashion');
const Jewelry = require('../models/jewleries');

const init = async ({}) => {
  const db = await mongoDB.init({});
  const rootInfra = await root.init({ db });
  const userInfra = await user.init({ User });
  const apparelInfra = await apparel.init({ Apparel });
  const fashionInfra = await fashion.init({ Fashion });

  const jewelryInfra = await jewelry.init({ Jewelry });

  return {
    rootInfra,
    userInfra,
    apparelInfra,
    fashionInfra,
    jewelryInfra,
  };
};

module.exports = { init };
