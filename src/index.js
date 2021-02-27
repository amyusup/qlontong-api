const router = require("express").Router();
const authRoutes = require("./routes/auth");
const produkRoutes = require("./routes/produk");

router.use("/auth", authRoutes);
router.use("/produk", produkRoutes);

module.exports = router;
