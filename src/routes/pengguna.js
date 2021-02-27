const router = require("express").Router();
const penggunaController = require("../controllers/pengguna");
const authJWT = require("../middlewares/auth");
const uploadImg = require("../middlewares/multer");
router
  .get("/:id", penggunaController.getPenggunaById)
  .patch(
    "/:id",
    authJWT.authentication,
    uploadImg.singleUpload,
    penggunaController.UbahPengguna
  );

module.exports = router;