const db = require("../config/mysql");

module.exports = {
  getPenggunaById: function (id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_pengguna WHERE id=${id} `,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  ubahPengguna: (id, setData) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE tb_pengguna SET ? WHERE id=${id}`,
        setData,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },

};
