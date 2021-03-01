const PesananModel = require("../models/pesanan");
const { response } = require("../helpers/response");

module.exports = {
  getPesanan: async function (req, res) {
    try {
      // const { id } = req.params;
      const { id } = req.token;
      const { status } = req.query;
      const newStatus = status ? status : "dikemas";
      const pesanan = await PesananModel.getPesanan(id, newStatus);
      if (pesanan[0]) {
        response(res, 200, pesanan);
      } else {
        response(res, 400, { message: "Belum ada pesanan" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
  getDetailPesanan: async function (req, res) {
    try {
      const { kode } = req.query;
      const pesanan = await PesananModel.getDetailPesanan(kode);
      if (pesanan[0]) {
        response(res, 200, pesanan);
      } else {
        response(res, 400, { message: "Belum ada pesanan" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
  tambahPesanan: async function (req, res) {
    try {
      const {id} = req.token
      const setData = req.body;
      setData.id_pembeli = id
      const id_pesanan = await PesananModel.getLastIdPesanan();
      setData.kode_pesanan = "QLONTONG_" + id_pesanan[0].kode_pesanan;
      const pesanan = await PesananModel.tambahPesanan(setData);
      response(res, 200, {
        result: pesanan,
        message: "Pesanan berhasil di tambahkan",
      });
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },
};
