const router = require('express').Router()
const pesananController = require('../controllers/pesanan')
const authJWT = require("../middlewares/auth");
router
    .get('/:id',  authJWT.authentication, pesananController.getPesanan)
    .post('/detail', authJWT.authentication, pesananController.getDetailPesanan)
    .post('/', authJWT.authentication, pesananController.tambahPesanan)
module.exports = router