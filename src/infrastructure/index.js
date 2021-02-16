const mongoDB = require('./mongoDB');
const root = require('./rootInfra');
const apparel = require('./apparelInfra');
const user = require('./userInfra/');
const fashion = require('./fashionInfra');
const jewelry = require('./jewelryInfra');
const products = require('./productsInfra');
const User = require('../models/user');
const Apparel = require('../models/apparels');
const Fashion = require('../models/fashion');
const Jewelry = require('../models/jewleries');
const Products = require('../models/products');
const init = async ({}) => {
  const db = await mongoDB.init({});
  const rootInfra = await root.init({ db });
  const userInfra = await user.init({ User });
  const apparelInfra = await apparel.init({ Apparel });
  const fashionInfra = await fashion.init({ Fashion });
  const productInfra = await products.init({ Products });
  const jewelryInfra = await jewelry.init({ Jewelry });

  return {
    rootInfra,
    userInfra,
    productInfra,
    apparelInfra,
    fashionInfra,
    jewelryInfra,
  };
};

module.exports = { init };
