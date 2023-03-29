const models = require("../models");
const { passwordCheck } = require("../middleware/auth");
const { encodeJWT } = require("../helpers/jwt.helper");
const validateSignIn = require("../validator/signIn.validator");
const { ValidatorError } = require("../errors/ValidatorError");
const { CredentialsError } = require("../errors/CredentialsError");

const login = async (req, res) => {
  try {
    const errors = await validateSignIn(req.body);

    if (errors) {
      throw new ValidatorError(errors);
    }

    const [user] = await models.user.findByMail({ email: req.body.email });

    if (!user) throw new CredentialsError();

    const passwordVerification = passwordCheck(
      user[0].password,
      req.body.password
    );

    if (!passwordVerification) throw new CredentialsError();

    delete user.password;

    const token = encodeJWT(user[0]);

    res.cookie("auth_token", token, { httpOnly: true, secure: false });

    res.status(200).json({ username: user[0].name, roles: user[0].roles });
  } catch (e) {
    res.sendStatus(500);
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

module.exports = { login, logout };
