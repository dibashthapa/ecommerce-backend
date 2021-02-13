const { notAllowed } = require("./notAllowed");
const { notFound } = require("./notFound");

function init({}) {
  const notAllowedHandler = notAllowed();
  const notFoundHandler = notFound();
  return {
    notAllowedHandler,
    notFoundHandler,
  };
}

module.exports = { init };
