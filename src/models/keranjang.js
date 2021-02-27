const db = require("../config/mysql");

module.exports = {
  getKeranjang: function (id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT a.id, a.id_pembeli, a.id_penjual, b.nama AS nama_penjual, a.id_produk, c.nama AS nama_produk, c.foto AS foto_produk, c.harga AS harga_produk, a.qyt FROM tb_keranjang a LEFT JOIN tb_pengguna b ON a.id_penjual=b.id LEFT JOIN tb_produk c ON a.id_produk=c.id WHERE a.id_pembeli=${id}`,
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
  getProdukKeranjang: function (id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_keranjang WHERE id_produk=${id}`,
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

  tambahKeranjang: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tb_keranjang SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  ubahKeranjang: (id,id_pembeli, setData) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE tb_keranjang SET ? WHERE id_produk=${id} AND id_pembeli=${id_pembeli}`,
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

  hapusKeranjang: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM tb_keranjang WHERE id='${id}'`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
};
