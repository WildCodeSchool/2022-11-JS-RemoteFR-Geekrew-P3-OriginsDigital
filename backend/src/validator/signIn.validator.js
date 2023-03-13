const Joi = require("joi");

const validateSignIn = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string()
      .min(8)
      .max(30)
      // .pattern(
      // // eslint-disable-next-line prefer-regex-literals
      // new RegExp(
      //   "^(?=.*[a-zA-Z])(?=.*d)(?=.*[@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ])[a-zA-Zd@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ]{8,20}$"
      // )
      // )
      .presence("required"),
  })
    .required()
    // .min(1)
    .validate(user, { abortEarly: false }).error;

  return schema;
};

module.exports = validateSignIn;
