const userModel = require("../models/user");
const productModel = require("../models/product");
const orderedModel = require("../models/orderProduct");
const Razorpay = require("razorpay");
const bcrypt = require("bcrypt");
const transactionModel = require("../models/transaction");
//register logic
const registerUser = async (req, res) => {
  try {
    const { name, dob, email, password, cpassword, gender } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "email already exists", Success: false });
    }

    if (password === cpassword) {
      await userModel.create({
        name,
        email,
        dob,
        password,
        gender,
      });

      //const token = await usercreated.createToken();
      // res.cookie("jwt", token);

      res.status(201).json({ message: "register successfull", Success: true });
    } else {
      res.status(401).json({ message: "password invaild" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send("check error");
  }
};
// login logic
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await userModel.findOne({ email });

    if (!userExist || !(await bcrypt.compare(password, userExist.password))) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials", success: false });
    }

    const token = await userExist.generateAuthToken();

    return res.status(200).json({
      message: "Login successful",
      token: token,
      success: true,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const getUser = async (req, res) => {
  try {
    const User = await userModel.findOne({ _id: req.id }).populate("addCart");
    // console.log(User);
    res.status(200).json(User);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    const User = await userModel.findOne({ _id: req.id });
    User.tokens = [];
    await User.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(200).json({ success: false, error: error.message });
  }
};
const addCarts = async (req, res) => {
  try {
    const { id } = req.body;
    const User = await userModel.findOne({ _id: req.id });
    const exists = User.addCart.find((obj) => obj.toString() === id);
    // console.log(exists);
    // console.log(User);
    if (exists !== undefined) {
      res.status(200).json({ message: "Already exists cart", Success: false });
    } else {
      User.addCart.push(id);
      await User.save();
      res.status(200).json({ message: "Added cart", Success: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const removeCart = async (req, res) => {
  try {
    const { id } = req.body;
    const User = await userModel.findOne({ _id: req.id });
    User.addCart = User.addCart.filter((elem) => {
      return elem != id;
    });
    await User.save();
    res.status(200).json({ message: "remove cart", Success: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createorder = async (req, res) => {
  try {
    const { buymultiple } = req.body;
    const amount = buymultiple.reduce(
      (total, obj) => total + obj.price * obj.quantity,
      0
    );
    if (amount != 0) {
      var instance = new Razorpay({
        key_id: "rzp_test_b5INSO4ZdK6x1H",
        key_secret: "MtpnMnigN9FCpFSeSXtehaUW",
      });
      const orders = await instance.orders.create({
        amount: parseInt(amount),
        currency: "INR",
        receipt: "receipt#1",
        partial_payment: false,
        notes: {},
      });

      res.status(201).json(orders);
    } else {
      res.status(400).json({ msg: "amout not recive" });
    }
  } catch (error) {
    console.log(error);
  }
};
const savetransaction = async (req, res) => {
  try {
    const User = await userModel.findOne({ _id: req.id });
    const { productInfo, transactionDetails, order, address } = req.body;

    const saveTransaction = await transactionModel.create({
      orderId: transactionDetails.razorpay_order_id,
      paymentId: transactionDetails.razorpay_payment_id,
      signature: transactionDetails.razorpay_signature,
      amount: order.amount,
      currency: order.currency,
      status: "success",
      userId: User._id,
    });

    if (saveTransaction._id) {
      // Save all ordered products
      const savedProducts = await Promise.all(productInfo.map(async (obj) => {
        const savedProduct = await new orderedModel({
          transactionId: saveTransaction._id,
          subamount: obj.price,
          productId: obj.id,
          userId: User._id,
          quantity: obj.quantity,
          discount: obj.discount,
          tax: obj.tax,
          address: ` ${address.homeNo} ${address.pinCode} ${address.subdistrict} ${address.district} ${address.state}  ${address.country}`,
        }).save();
        return savedProduct._id; // Return the ID of the saved product
      }));

      // Store the IDs of the ordered products in the transaction document
      saveTransaction.orderProductIds = savedProducts;
      await saveTransaction.save();

      // Update user's transactionId array
      User.transactionId.push(saveTransaction._id);
      await User.save();

      res.status(201).json({ savedProducts, saveTransaction });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const myorder = async (req, res) => {
  try {
    // console.log(req.id);
    const order = await orderedModel
      .find({ userId: req.id })
      .populate("productId");
    // console.log(order);
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
  addCarts,
  removeCart,
  createorder,
  savetransaction,
  myorder,
};
