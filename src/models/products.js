const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
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
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
