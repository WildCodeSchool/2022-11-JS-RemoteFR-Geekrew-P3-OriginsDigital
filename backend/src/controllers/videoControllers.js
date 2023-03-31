const models = require("../models");

const browse = (req, res) => {
  models.video
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

  models.video
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
  const video = req.body;

  video.id = parseInt(req.params.id, 10);

  models.video
    .update(video)
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
  const video = req.body;

  models.video
    .insert(video)
    .then(([result]) => {
      res.location(`/video/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.video
    .delete(id)
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

const browseByCategory = (req, res) => {
  models.video
    .findAllByCategory()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readVideoById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.video
    .findById(id)
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

const updateVideoById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { likes, dislikes, isLiked, isDisliked } = req.body;
  models.video
    .updateLike(id, likes, dislikes)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        models.video
          .updateUserLike(isLiked, isDisliked, req.userId, id)
          .then((results) => {
            if (results.affectedRows === 0) {
              models.video.insertUserLike(isLiked, isDisliked, req.userId, id);
              res.sendStatus(201);
            }
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseLikeById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.video
    .browseLikeState(id, req.userId)
    .then(([rows]) => {
      const liked = rows.length > 0;
      const disliked = rows[0]?.disliked || false;
      res.json({ liked, disliked });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  browseByCategory,
  readVideoById,
  updateVideoById,
  browseLikeById,
};
