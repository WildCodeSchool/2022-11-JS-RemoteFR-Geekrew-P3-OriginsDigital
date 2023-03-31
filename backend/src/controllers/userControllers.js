const models = require("../models");
const { encodeJWT } = require("../helpers/jwt.helper");

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

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        delete req.user.password;
        delete req.user.iat;
        delete req.user.exp;

        const token = encodeJWT({ ...req.user, ...user });
        res.cookie("auth_token", token, { httpOnly: true, secure: false });

        res.status(204).json({ user });
      }
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

const deleteUser = (req, res) => {
  models.user
    .deleteUser(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneUser = (req, res) => {
  models.user
    .getUser(req.email)
    .then(([user]) => {
      if (user[0] != null) {
        const persistedUser = user[0];
        delete persistedUser.password;
        res.send(user[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  addUser,
  updateUser,
  getUserByEmail,
  deleteUser,
  getOneUser,
};
