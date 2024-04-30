const mongoose = require("mongoose");
const orderedSchema = new mongoose.Schema(
  {
    transactionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      required: true,
    },
    subamount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default:"processing"
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    quantity: {
      type: Number,
      required: [true, {message:"Quantity is not received"}],
      min: [1, "Quantity must be at least 1"], // Ensure quantity is positive
    },
    discount: {
      type: Number,
      required: [true, {message:"Discount is not received"}],
    },
    tax: {
      type: Number,
      required: [true, {message:"Tax is not received"}],
    },
    address:{
    type:String,
    required:[true,{message:"address is not received"}]
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Middleware to update timestamp before saving
orderedSchema.pre('save', function(next) {
  next();
});

const orderp = mongoose.model("OrderedProduct", orderedSchema);

module.exports = orderp;
