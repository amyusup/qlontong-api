const ProdukModel = require("../models/produk");
const { response } = require("../helpers/response");

module.exports = {
  getProduk: async function (req, res) {
    try {
      const { limit, nama, orderby } = req.query;
      const newLimit = !isNaN(parseInt(limit)) ? parseInt(limit) : 25;
      const newNamat = nama ? nama : "";
      const newOrderBy = orderby ? orderby : "tanggal_input";
      const produk = await ProdukModel.getProduk(
        newLimit,
        newNamat,
        newOrderBy
      );
      if (produk) {
        response(res, 200, produk);
      } else {
        response(res, 400, { message: "Produk belum tersedia" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
  getProdukById: async function (req, res) {
    try {
      const { id } = req.params;
      const produk = await ProdukModel.getProdukById(id);
      if (produk) {
        response(res, 200, produk);
      } else {
        response(res, 400, { message: "Produk tidak tersedia" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
  tambahProduk: async function (req, res) {
    try {
      const setData = req.body;
      if (req.file) {
        setData.foto = req.file.filename;
      } else {
        delete setData.foto;
      }
      const produk = await ProdukModel.tambahProduk(setData);
      response(res, 200, {
        result: produk,
        message: "Produk berhasil ditambahkan",
      });
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },

  ubahProduk: async function (req, res) {
    try {
      const { id } = req.params;
      const setData = req.body;
      if (req.file) {
        setData.foto = req.file.filename;
      } else {
        delete setData.foto;
      }
      const produk = await ProdukModel.ubahProduk(id, setData);
      response(res, 200, {
        result: produk,
        message: "Produk berhasil diubah",
      });
    } catch (e) {
      console.log(e)
      response(res, 500, { message: e.message });
    }
  },

  hapusProduk: async function (req, res) {
    try {
      const { id } = req.params;
      const produk = await ProdukModel.hapusProduk(id);
      response(res, 200, {
        result: produk,
        message: "Produk berhasil dihapus",
      });
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
};
