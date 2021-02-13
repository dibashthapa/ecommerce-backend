const infraConfig = require("./infraConfig");
const apiConfig = require("./apiConfig");

module.exports = {
  ...infraConfig,
  ...apiConfig,
};
