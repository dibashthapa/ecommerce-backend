const mongoose = require('mongoose');
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
const Apparel = mongoose.model('Apparel', ApparelSchema);
module.exports = Apparel;
