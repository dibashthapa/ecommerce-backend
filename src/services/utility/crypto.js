const crypto = require("crypto");

const KEY_LENGTH = 64;
const DIGEST = "sha512";
const ITERATIONS = 512;

const hash = (string, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(string, salt, ITERATIONS, KEY_LENGTH, DIGEST, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash.toString("hex"));
    });
  });
};

const compare = async (string, hashed, salt) => {
  return (await hash(string, salt)) === hashed;
};

module.exports = { hash, compare };
