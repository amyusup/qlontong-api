const router = require('express').Router()
const keranjangController = require('../controllers/keranjang')
const authJWT = require("../middlewares/auth");
router
    .get('/',  authJWT.authentication, keranjangController.getKeranjang)
    .post('/', authJWT.authentication, keranjangController.tambahKeranjang)
    .delete('/:id',authJWT.authentication, keranjangController.hapusKeranjang) 
module.exports = router