const router = require("express").Router();
const penggunaController = require("../controllers/pengguna");
const authJWT = require("../middlewares/auth");
const uploadImg = require("../middlewares/multer");
router
  .get("/", authJWT.authentication, penggunaController.getPenggunaById)
  .patch(
    "/ubah-saldo/:id",
    authJWT.authentication,
    penggunaController.UbahSaldo
  )
  .patch(
    "/",
    authJWT.authentication,
    uploadImg.singleUpload,
    penggunaController.UbahPengguna
  );

module.exports = router;
