const db = require("../config/mysql");

module.exports = {
  cekPengguna: function (email) {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_pengguna WHERE email='${email}'`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  daftar: function (setData) {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tb_pengguna SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
}