const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  findAllByCategory() {
    return this.database.query(
      `select * from  ${this.table} JOIN category ON category.id = ${this.table}.category_id ORDER BY category_id `
    );
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
}

module.exports = VideoManager;
