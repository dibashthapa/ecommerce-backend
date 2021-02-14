const logError = console.error;
const log = console.log;
const get = (infra) => async ({}) => {
  try {
    const foundJewelry = await infra.findAll();
    return { foundJewelry };
  } catch (error) {
    logError(error.message);
    throw { error, status: 404 };
  }
};

module.exports = { get };
