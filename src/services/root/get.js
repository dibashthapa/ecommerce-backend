const get = (infra) => ({}) => {
  // Do business logic here
  // Invoke db/network/directory calls from infra
  return infra.get({});
};

module.exports = { get };
