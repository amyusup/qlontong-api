const db = require("../config/mysql");

module.exports = {
  getPesanan: function (id, status) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT a.id, a.kode_pesanan, a.id_pembeli, a.id_penjual, b.nama AS nama_penjual, a.id_produk, c.nama AS nama_produk, c.foto AS foto_produk, c.harga AS harga_produk, a.qyt,a.status, a.tgl FROM tb_pesanan a LEFT JOIN tb_pengguna b ON a.id_penjual=b.id LEFT JOIN tb_produk c ON a.id_produk=c.id WHERE a.id_pembeli=${id} AND status='${status}' GROUP BY a.kode_pesanan`,
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
  getDetailPesanan: function (kode) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT a.id, a.kode_pesanan, a.id_pembeli, a.id_penjual,a.status, b.nama AS nama_penjual,b.no_hp,b.alamat, a.id_produk, c.nama AS nama_produk, c.foto AS foto_produk, c.harga AS harga_produk, a.qyt FROM tb_pesanan a LEFT JOIN tb_pengguna b ON a.id_penjual=b.id LEFT JOIN tb_produk c ON a.id_produk=c.id WHERE a.kode_pesanan='${kode}'`,
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

  getLastIdPesanan: function () {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT MAX(SUBSTRING(kode_pesanan,10))+1 AS kode_pesanan FROM tb_pesanan`,
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

  tambahPesanan: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tb_pesanan SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  ubahPesanan: (kode, setData) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE tb_pesanan SET ? WHERE kode_pesanan=${kode}`,
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
