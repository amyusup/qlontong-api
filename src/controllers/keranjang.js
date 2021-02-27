const KeranjangModel = require("../models/keranjang");
const { response } = require("../helpers/response");

module.exports = {
  getKeranjang: async function (req, res) {
    try {
      const { id } = req.params;
      const Keranjang = await KeranjangModel.getKeranjang(id);
      if (Keranjang[0]) {
        response(res, 200, Keranjang);
      } else {
        response(res, 400, { message: "Keranjang masih kosong" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
  tambahKeranjang: async function (req, res) {
    try {
      const setData = req.body;
      const produk = await KeranjangModel.getProdukKeranjang(setData.id_produk);
     
      if (produk[0]) {
         var keranjang = await KeranjangModel.ubahKeranjang(
          produk[0].id,
          setData.id_pembeli,
          {qyt:produk[0].qyt+1}
        );
      } else {
         var keranjang = await KeranjangModel.tambahKeranjang(setData);
      }
      response(res, 200, {
        result: keranjang,
        message: "Berhasil dimasukkan ke keranjang",
      });
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },

  hapusKeranjang: async function (req, res) {
    try {
      const { id } = req.params;
      const produk = await KeranjangModel.hapusKeranjang(id);
      response(res, 200, {
        result: produk,
        message: "Berhasil dihapus dari keranjang",
      });
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
};
