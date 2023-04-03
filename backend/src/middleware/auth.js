const argon2 = require("argon2");

const hashingConfig = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashingPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingConfig)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const passwordCheck = (clearPass, hashedPass) => {
  return argon2.verify(clearPass, hashedPass, hashingConfig);
};

module.exports = {
  hashingPassword,
  passwordCheck,
};
