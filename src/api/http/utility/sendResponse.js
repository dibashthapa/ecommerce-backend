/**
 * This function sends response for http api
 * @param {any} param0 the object containing response attrs
 * @param {any} param0.res the express response object
 * @param {any} param0.body the api response object
 * @param {any} param0.headers the express response header object
 * @param {number} param0.status the http response status code
 */
const sendResponse = ({ responseWriter, body, headers = {}, status }) => {
  for (let header in headers) {
    responseWriter.setHeader(header, headers[header]);
  }

  responseWriter.status(status || 200).send(body);
};

module.exports = sendResponse;
