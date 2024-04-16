const express = require("express");
const Router = express.Router();
const auth = require('../middlewars/auth');
const {registerUser,loginUser,getUser,logoutUser,addCarts,removeCart,createorder,savetransaction,myorder} = require("../controllers/usreController");
const validateSignup = require('../validation_model/registerUser_vaildat');
const validateAddress = require('../validation_model/address_vaildatio');

Router.route("/new").post(validateSignup,registerUser);
Router.route("/getuser").get(auth,getUser);
Router.route("/login").post(loginUser);
Router.route("/logout").post(auth,logoutUser);
Router.route("/addcart").put(auth,addCarts);
Router.route("/cartremove").delete(auth,removeCart);
Router.route("/createorder").post(auth,validateAddress,createorder);
Router.route("/savetransaction").post(auth,savetransaction);
Router.route("/myorders").get(auth,myorder);

module.exports = Router;