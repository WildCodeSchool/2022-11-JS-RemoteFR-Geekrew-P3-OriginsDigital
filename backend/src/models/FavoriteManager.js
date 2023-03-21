const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
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
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id where favorite.id = ?`,
      [id]
    );
  }

  delete(id) {
    return this.database.query(
      `delete from ${this.table} where favorite.id = ?`,
      [id]
    );
  }
}

module.exports = FavoriteManager;
