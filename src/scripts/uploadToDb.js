const apparels = require('../../apparels.json');
const fashion = require('../../fashion.json');
const products = require('../../products.json');
const jewerly = require('../../jewelry.json');
const config = require('../commons/config');
const mongoose = require('mongoose');

const parseProducts = (products) => {
  return JSON.parse(JSON.stringify(products));
};

const parseApparels = parseProducts(apparels);
const parseFashion = parseProducts(fashion);
const parseJewelry = parseProducts(jewerly);
const parseProduct = parseProducts(products);

// const parseJewelry = parseProducts(jewerly);
const Apparel = require('../models/apparels');
const Product = require('../models/products');
const Fashion = require('../models/fashion');
const Jewelry = require('../models/jewleries');

async function createApparels() {
  await Apparel.remove({});
  parseApparels.map(async ({ category, description, name, price, img_url, id }, index) => {
    console.log(`Adding  Product ${name}`);
    console.log('apparels');
    console.log(index);
    const newProduct = await Apparel({
      category,
      description,
      name,
      price,
      imgUrl: img_url,
      id,
    });
    newProduct.save();
  });
}

async function createProduct() {
  await Product.remove({});
  parseProduct.map(
    async ({ category, description, name, price, img_url, id, _category }, index) => {
      console.log(`Adding  Product ${name}`);
      console.log('apparels');
      console.log(index);
      const newProduct = await Product({
        category,
        description,
        name,
        price,
        imgUrl: img_url,
        id,
        _category,
      });
      newProduct.save();
    }
  );
}

async function createFashion() {
  await Fashion.remove({});
  parseFashion.map(async ({ category, description, name, price, img_url, id }, index) => {
    try {
      console.log(`Adding  Product ${name}`);
      console.log(index);

      const newProduct = await Fashion({
        category,
        description,
        name,
        price,
        imgUrl: img_url,
        id,
      });
      newProduct.save();
    } catch (err) {
      console.log(err);
    }
  });
}

async function createJewelry() {
  await Jewelry.remove({});
  parseJewelry.map(async ({ category, description, name, price, img_url, id }, index) => {
    try {
      console.log(`Adding  Product ${name}`);
      const newProduct = await Jewelry({
        category,
        description,
        name,
        price,
        imgUrl: img_url,
        id,
      });
      newProduct.save();
    } catch (err) {
      console.log(err);
    }
  });
}

async function main() {
  await mongoose.connect(config.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 1,
  });

  createApparels();
  createFashion();
  createJewelry();
  createProduct();
  setTimeout(() => process.exit(), 15000);
}

main();
