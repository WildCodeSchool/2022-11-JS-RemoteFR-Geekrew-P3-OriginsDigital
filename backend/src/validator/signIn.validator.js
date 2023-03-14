const Joi = require("joi");

const validateSignIn = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ])[a-zA-Z\d@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ]{8,20}$/
      )
      .required()
      .presence("required"),
  })
    .required()
    // .min(1)
    .validate(user, { abortEarly: false }).error;

  return schema;
};

module.exports = validateSignIn;
