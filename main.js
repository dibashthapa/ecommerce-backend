const { http } = require('./src/api');
const services = require('./src/services');
const config = require('./src/commons/config');

const main = async () => {
  const app = await services.init(config);

  const { server } = http.init(app);

  server.listen(config.apiPort, () => {
    console.log(`Started at ${config.apiPort}`);
  });
};

main();
