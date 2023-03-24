const model = require("../models");

const verifyUser = (req, res, next) => {
  const { id } = req.params.id;
  model.favorite.delete(id, req.userId);

  next();
};

module.exports = verifyUser;
