const apparels = require('../../apparels.json');
const fashion = require('../../fashion.json');
const jewerly = require('../../jewelry.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 1,
});
const ApparelSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  { versionKey: false }
);

const JewelrySchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  { versionKey: false }
);

const FashionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  { versionKey: false }
);

const Apparel = mongoose.model('Apparel', ApparelSchema);
const Jewelry = mongoose.model('Jewelry', JewelrySchema);
const Fashion = mongoose.model('Fashion', FashionSchema);

const parseProducts = (products) => {
  return JSON.parse(JSON.stringify(products));
};

const parseApparels = parseProducts(apparels);
const parseFashion = parseProducts(fashion);
const parseJewelry = parseProducts(jewerly);

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

process.exit();
