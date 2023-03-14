const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, username, email, password) VALUES (?,?,?,?,?)`,
      [
        user.firstName,
        user.lastName,
        user.userName,
        user.email,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table}
      SET firstname = ?, lastname = ?, username = ?, email = ?, password = ?, avatar_id = ?
      WHERE id = ?`,
      [
        (user.firstName,
        user.lastName,
        user.userName,
        user.email,
        user.password,
        user.avatar_id,
        user.id),
      ]
    );
  }

  findByMail(user) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      user.email,
    ]);
  }
}
module.exports = UserManager;
