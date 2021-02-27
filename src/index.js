const router = require("express").Router();
const authRoutes = require("./routes/auth");
const produkRoutes = require("./routes/produk");
const penggunaRoutes = require("./routes/pengguna");
const keranjangRoutes = require("./routes/keranjang");
const pesananRoutes = require("./routes/pesanan");

router.use("/auth", authRoutes);
router.use("/produk", produkRoutes);
router.use("/pengguna", penggunaRoutes);
router.use("/keranjang", keranjangRoutes);
router.use("/pesanan", pesananRoutes);

module.exports = router;
