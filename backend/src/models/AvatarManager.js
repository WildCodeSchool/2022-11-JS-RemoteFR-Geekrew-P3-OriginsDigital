const AbstractManager = require("./AbstractManager");

class AvatarManager extends AbstractManager {
  constructor() {
    super({ table: "avatar" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  findById(id) {
    return this.database.query(`select * from ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = AvatarManager;
