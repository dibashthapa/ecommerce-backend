const { findOne } = require("./findOne");
const { create } = require("./create");
const { updateOne } = require("./updateOne");
const { findById } = require("./findById")
function init({ User }) {
  
  return {
    findOne: findOne(User),
    create: create(User),
    updateOne: updateOne(User),
    findById: findById(User)
  };
}

module.exports = { init };
