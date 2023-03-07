const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, username, email, password) VALUES ( ?, ?, ?, ?, ? )`,
      [user.firstname, user.lastname, user.username, user.email, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table}
      SET firstname = ?, lastname = ?, username = ?, email = ?, password = ?, avatar_id = ?
      WHERE id = ?`[
        (user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.password,
        user.avatar_id,
        user.id)
      ]
    );
  }
}

module.exports = UserManager;
