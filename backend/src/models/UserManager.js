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
        user.avatar,
      ]
    );
  }

  update(user) {
    const sql = [];
    const data = Object.keys(user).map((elem) => {
      sql.push(
        `${elem.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)} = ?`
      );
      return user[elem];
    });

    return this.database.query(
      `update ${this.table} set ${sql.join(",")} where id = ?`,
      [...data, user.id]
    );
  }

  findByMail(user) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      user.email,
    ]);
  }

  delete(user) {
    return this.database.query(`delete from ${this.table} where id = ?`, [
      user.firstName,
      user.lastName,
      user.userName,
      user.email,
      user.password,
      user.avatar_id,
      user.id,
    ]);
  }

  getUser(user) {
    return this.database.query(
      `
    SELECT user.id, user.username, user.firstname, user.lastname, user.email, user.password, user.premium, user.avatar_id, user.roles, avatar.name, avatar.icons
    FROM user
    JOIN avatar ON user.avatar_id = avatar.id
    WHERE user.email = ?
  `,
      [user]
    );
  }
}

module.exports = UserManager;
