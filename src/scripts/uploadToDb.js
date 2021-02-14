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

function createApparels() {
  parseApparels.map(({ category, description, name, price, img_url, id }, index) => {
    console.log(`Adding  Product ${name}`);
    console.log('apparels');
    console.log(index);
    const newProduct = Apparel({
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

function createProduct() {
  parseProduct.map(({ category, description, name, price, img_url, id }, index) => {
    console.log(`Adding  Product ${name}`);
    console.log('apparels');
    console.log(index);
    const newProduct = Product({
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

function createFashion() {
  parseFashion.map(({ category, description, name, price, img_url, id }, index) => {
    try {
      console.log(`Adding  Product ${name}`);
      console.log(index);

      const newProduct = Fashion({
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

function createJewelry() {
  parseJewelry.map(({ category, description, name, price, img_url, id }, index) => {
    try {
      console.log(`Adding  Product ${name}`);
      const newProduct = Jewelry({
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
