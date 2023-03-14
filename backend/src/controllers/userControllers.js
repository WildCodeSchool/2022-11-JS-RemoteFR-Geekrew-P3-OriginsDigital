const models = require("../models");

const addUser = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateUser = (req, res) => {
  const user = req.body;

  models.user

    .update(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByEmail = (req, res, next) => {
  models.user
    .findByMail(req.body)
    .then(([user]) => {
      if (user[0] != null) {
        [req.user] = user;
        res.location(`/user/${user.insertId}`).sendStatus(201);
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { addUser, updateUser, getUserByEmail };
