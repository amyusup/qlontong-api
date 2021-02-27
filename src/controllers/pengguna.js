const PenggunaModel = require("../models/pengguna");
const { response } = require("../helpers/response");

module.exports = {
  getPenggunaById: async function (req, res) {
    try {
      const { id } = req.params;
      const pengguna = await PenggunaModel.getPenggunaById(id);
      if (pengguna[0]) {
        response(res, 200, pengguna);
      } else {
        response(res, 400, { message: "Pengguna tidak ditemukan" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },

  UbahPengguna: async function (req, res) {
    try {
      const { id } = req.params;
      const setData = req.body;
      if (req.file) {
        setData.foto = req.file.filename;
      } else {
        delete setData.foto;
      }
      const pengguna = await PenggunaModel.ubahPengguna(id, setData);
      response(res, 200, {
        result: pengguna,
        message: "Pengguna berhasil diubah",
      });
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },

};
