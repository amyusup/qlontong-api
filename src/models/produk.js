const db = require("../config/mysql");

module.exports = {
  getProduk: function (limit, nama, orderBy) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_produk WHERE nama LIKE '%${nama}%' ORDER BY ${orderBy} LIMIT ${limit} `,
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
  getProdukById: function (id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT a.*, b.nama AS nama_penjual FROM tb_produk a LEFT JOIN tb_pengguna b ON a.id_penjual=b.id WHERE a.id='${id}'`,
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
  tambahProduk: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tb_produk SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  ubahProduk: (id, setData) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE tb_produk SET ? WHERE id=${id}`,
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

  hapusProduk: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM tb_produk WHERE id='${id}'`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
};
