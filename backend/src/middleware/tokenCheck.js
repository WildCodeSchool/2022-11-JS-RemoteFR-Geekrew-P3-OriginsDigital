const jwt = require("jsonwebtoken");
const { ValidatorError } = require("../errors/ValidatorError");
const { validateSignIn } = require("../validator/signIn.validator");
const { CredentialsError } = require("../errors/CredentialsError");
const { findByMail } = require("../models/UserManager");

const tokenCheck = async (req, res, next) => {
  try {
    const errors = validateSignIn(req.body);

    if (errors) throw new ValidatorError(errors);

    const [user] = await findByMail(req.body.email);

    if (!user) throw new CredentialsError();

    req.payload = jwt.verify(user.token, process.env.JWT_SECRET);
    res.cookie("auth_token", user.token, { httpOnly: true, secure: false });
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
module.export = { tokenCheck };
