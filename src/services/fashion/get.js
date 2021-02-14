const logError = console.error;
const log = console.log;
const get = (infra) => async ({}) => {
  try {
    const foundFashion = await infra.findAll();
    return { foundFashion };
  } catch (error) {
    logError(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { get };
