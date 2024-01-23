const bcrypt = require("bcryptjs");

const hashPw = (string) => {
  return bcrypt.hashSync(string, 10);
};

const comparePw = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};

module.exports = { hashPw, comparePw };

/*  method 1
const oldHashMethod = (str) => {
  bcrypt.hash(str, 10, (err, result) => {
    if (err) console.log({ err });
    console.log(result);
  });
};

oldHashMethod("basanti");*/

// method 2

