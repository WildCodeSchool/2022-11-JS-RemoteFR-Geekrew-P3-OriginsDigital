const Joi = require("joi");

const validateSignIn = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(6).max(20).required().presence("required"),
  })
    .required()
    .min(6)
    .validate(user, { abortEarly: false }).error;

  return schema;
};

module.exports = validateSignIn;
