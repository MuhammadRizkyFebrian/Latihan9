const db = require('./db.config'); // pastikan ini mysql2/promise

const Products = {
  getAll: () => db.query('SELECT * FROM products').then(([rows]) => rows),

  getById: (id) =>
    db.query('SELECT * FROM products WHERE id = ?', [id]).then(([rows]) => rows[0]),

  create: (data) =>
    db.query('INSERT INTO products SET ?', data).then(([result]) => result),

  update: (id, data) => {
    const fields = [];
    const values = [];
    for (const k in data) {
      if (typeof data[k] !== 'undefined') {
        fields.push(`${k}=?`);
        values.push(data[k]);
      }
    }
    values.push(id);
    const sql = `UPDATE products SET ${fields.join(',')} WHERE id=?`;
    return db.query(sql, values).then(([result]) => result);
  },

  delete: (id) =>
    db.query('DELETE FROM products WHERE id=?', [id]).then(([result]) => result),
};

module.exports = Products;
