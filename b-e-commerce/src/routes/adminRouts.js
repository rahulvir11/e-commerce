const express = require("express");
const Router = express.Router();
const {addProduct ,allProducts,allTransactions,allUsers,updateProduct} = require("../controllers/adminControllers");
const validateProduct = require("../validation_model/newProduct_vaildation");

Router.route("/product/new").post(validateProduct,addProduct);
Router.route("/product/:id").put(validateProduct,updateProduct);
Router.route("/allproducts").get(allProducts);
Router.route("/alltransaction").get(allTransactions);
Router.route("/alluser").get(allUsers);


module.exports = Router;