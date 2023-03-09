const Yup = require("yup");

const validateSignIn = (user) => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required("Le mot de passe est requis")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ])[a-zA-Z\d@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ]{8,20}$/,
        "Le mot de passe doit contenir au moins une lettre, un chiffre et un caractère spécial (@&^$`ù=:;+/.?,£%*¨_°#•ë≠÷…@Ù€ô—}æÂê®†Úºîœπµ¬ÈÏ~Ìﬁß∞~ß◊©≈‹‡Ò∂ƒﬁ†®êÂæÙ) et doit être compris entre 8 et 20 caractères"
      ),
  });
  const isValid = schema.isValidSync(user, { abortEarly: false });
  if (!isValid) {
    const errorMessages = schema
      .validateSync(user, { abortEarly: false })
      .errors.map((error) => ({ message: error }));
    return { errorCount: errorMessages.length, errorMessages };
  }
  return isValid;
};

module.exports = validateSignIn;
