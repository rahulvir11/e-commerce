const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    pDescription: {
        type: String,
        required: true,
    },
    pName: {
        type: String,
        required: true,
    },
    pPrice: {
        type: Number,
        required: true,
        min: 0, // Minimum price must be 0 or greater
    },
    pStock: {
        type: Number,
        required: true,
        min: 0, // Minimum stock must be 0 or greater
    },
    pCategories: {
        type: String,
        enum: ['Electronics', 'Clothing', 'Books', 'Furniture', 'Toys','mobiles','fashion','leptop'], // Define allowed category values
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update updatedAt field before saving
productSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

// Virtual property to calculate total value of stock
productSchema.virtual('totalValue').get(function() {
    return this.pPrice * this.pStock;
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
