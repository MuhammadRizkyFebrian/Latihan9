const db = require('./db.config'); // pakai mysql2/promise

const User = {
  getAll: () => db.query('SELECT * FROM users').then(([rows]) => rows),

  getById: (id) =>
    db.query('SELECT * FROM users WHERE id = ?', [id]).then(([rows]) => rows[0]),

  create: (data) =>
    db.query('INSERT INTO users SET ?', data).then(([result]) => result),

  update: (id, data) => {
    const fields = [];
    const values = [];

    for (const key in data) {
      if (typeof data[key] !== 'undefined') {
        fields.push(`${key} = ?`);
        values.push(data[key]);
      }
    }

    if (fields.length === 0) {
      return Promise.resolve({ message: 'No fields to update' });
    }

    values.push(id);
    const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

    return db.query(sql, values).then(([result]) => result);
  },

  delete: (id) =>
    db.query('DELETE FROM users WHERE id = ?', [id]).then(([result]) => result)
};

module.exports = User;
