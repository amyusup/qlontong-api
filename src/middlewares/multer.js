const multer = require("multer");
const path = require("path");
const { response } = require("../helpers/response");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    str = file.originalname;
    const fileName = str.replace(/\s/g, "-");
    cb(null, `${Date.now()}-${fileName}`);
  },
});
const limits = { fileSize: 3e6 }; //3000000
const fileFilter = (req, file, cb) => {
  const fExtens = /jpg|png|jpeg|svg/;
  const extName = fExtens.test(path.extname(file.originalname).toLowerCase());
  if (extName) {
    cb(null, true);
  } else {
    cb("format image (jpg,png,jpeg,svg)", null);
  }
};

const upload = multer({ storage, limits, fileFilter });

const uploadImg = {
  singleUpload: (req, res, next) => {
    const singleUpload = upload.single("foto");
    singleUpload(req, res, (err) => {
      if (err) {
        if (err.code === `LIMIT_FIELD_VALUE`) {
          response(res, 500, { message: err });
        } else {
          response(res, 500, { message: err });
        }
      } else {
        req.body.foto = !req.file
          ? req.file
          : `/public/image/${req.file.filename}`;
        next();
      }
    });
  },
};

module.exports = uploadImg;
