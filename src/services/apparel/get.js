const logError = console.error;
const log = console.log;
const get = (infra) => async ({}) => {
  try {
    const foundApparel = await infra.findAll();
    return { foundApparel };
  } catch (error) {
    logError(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { get };
