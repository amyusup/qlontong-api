const router = require('express').Router()
const produkController = require('../controllers/produk')
const authJWT = require("../middlewares/auth");
const uploadImg = require("../middlewares/multer");
router
    .post('', produkController.getProduk)
    .get('/:id', produkController.getProdukById)
    .post('/tambah', authJWT.authentication, uploadImg.singleUpload, produkController.tambahProduk) 
    .patch('/:id',authJWT.authentication, uploadImg.singleUpload, produkController.ubahProduk) 
    .delete('/:id',authJWT.authentication, produkController.hapusProduk) 
module.exports = router