const mongoose = require('mongoose');
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
const Jewelry = mongoose.model('Jewelry', JewelrySchema);
module.exports = Jewelry;
