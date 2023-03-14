const Joi = require("joi");

const validateSignIn = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(8).max(30).required().presence("required"),
  })
    .required()
    // .min(1)
    .validate(user, { abortEarly: false }).error;

  return schema;
};

module.exports = validateSignIn;
