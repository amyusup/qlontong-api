const authModels = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("../helpers/response");

module.exports = {
  login: async function (req, res) {
    try {
      const setData = req.body;
      // console.log(setData)
      const pengguna = await authModels.cekPengguna(setData.email);
      if (!pengguna[0]) return response(res, 401, { message: "Email salah" });
      let cek = true;
      cek = bcrypt.compareSync(setData.password, pengguna[0].password);
      if (cek) {
        const {
          id,
          nama,
          email,
          saldo,
          foto,
          no_hp,
          alamat,
          role,
        } = pengguna[0];
        const token = jwt.sign(
          { id, nama, email, saldo, foto, no_hp, alamat, role },
          process.env.SECRET_KEY
        );
        let roles = "pembeli";
        if (role == 200) roles = "penjual";
        response(res, 200, { message: "Auth Success", token, roles });
      } else {
        response(res, 401, { message: "Password Salah" });
      }
    } catch (e) {
      response(res, 500, { message: e.message });
    }
  },

  daftar: async function (req, res) {
    try {
      const setData = req.body;
      const pengguna = await authModels.cekPengguna(setData.email);
      if (pengguna[0]) {
        return response(res, 403, { message: "Email telah digunakan" });
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newData = {
        ...setData,
        password: hash,
      };
      const result = await authModels.daftar(newData);
      response(res, 200, { data: result, message: "Berhasil mendaftar" });
    } catch (error) {
      response(res, 500, { message: error.message });
    }
  },
};
