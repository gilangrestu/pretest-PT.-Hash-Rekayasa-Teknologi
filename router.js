const { getUsers, login } = require("./api/user/user.controller");
const { createProduk,getProduk } = require("./api/produk/produk.controller");
const { orderProduk } = require("./api/order/order.controller");
const router = require("express").Router();
const { checkToken } = require("./auth/token_validation");

router.get("/listuser", checkToken, getUsers);
router.post("/inputproduk", checkToken, createProduk);
router.get("/listproduk", checkToken, getProduk);
router.post("/login", login);
router.post("/order", orderProduk);

module.exports=router;