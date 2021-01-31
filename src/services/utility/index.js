const { hash, compare } = require("./crypto");
const { createToken } = require("./jwt");

module.exports = { hash, createToken, compare };
