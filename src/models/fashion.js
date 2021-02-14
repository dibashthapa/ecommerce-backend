const mongoose = require('mongoose');
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
const Fashion = mongoose.model('Fashion', FashionSchema);
module.exports = Fashion;
