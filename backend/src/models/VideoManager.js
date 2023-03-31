const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      video.title,
    ]);
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [video.title, video.id]
    );
  }

  findAllByCategory() {
    return this.database.query(
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id`
    );
  }

  findById(id) {
    return this.database.query(
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id where video.id = ?`,
      [id]
    );
  }

  updateLike(id, likes, dislikes) {
    return this.database.query(
      `UPDATE video v
     SET v.likes = ?, v.dislikes = ?
     WHERE v.id = ?;`,
      [likes, dislikes, id]
    );
  }

  insertUserLike(isLiked, isDisliked, userId, id) {
    return this.database.query(
      `INSERT INTO user_likes (liked, disliked, user_id, video_id) 
      VALUES ( ?, ?, ?, ?);`,
      [isLiked, isDisliked, userId, id]
    );
  }

  updateUserLike(isLiked, isDisliked, userId, id) {
    return this.database.query(
      `UPDATE user_likes ul SET ul.liked = ?, ul.disliked = ? WHERE ul.video_id = ? AND ul.user_id = ?;`,
      [isLiked, isDisliked, id, userId]
    );
  }

  browseLikeState(id, userId) {
    return this.database.query(
      `select * FROM user_likes where video_id = ? AND user_id = ?;`,
      [id, userId]
    );
  }
}

module.exports = VideoManager;
