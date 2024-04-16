const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    paymentId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0 // Ensure amount is non-negative
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['success', 'failed'],
        required: true
    },
    signature: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    timestamp: {
        type: Date,
    },
    address: {
        type: String,
        required: true
    },orderProductIds:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderedProduct",
    }]
    // You can add more fields as needed
});

// Middleware to update timestamp before saving
transactionSchema.pre('save', function(next) {
    this.timestamp = new Date();
    next();
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
