const models = require("../models");

const browse = (req, res) => {
  models.favorite
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.favorite
    .find(id)
    .then(([result]) => {
      if (result.length) {
        res.json(result[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const edit = (req, res) => {
  const favorite = req.body;

  favorite.id = parseInt(req.params.id, 10);

  models.favorite
    .update(favorite)
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

const add = (req, res) => {
  const userId = req.body.user_id;
  const videoId = req.body.video_id;
  models.favorite
    .insert(userId, videoId)
    .then(([result]) => {
      res.location(`/favorite/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.favorite
    .delete(req.params.id)
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

module.exports = { browse, read, edit, add, destroy };
