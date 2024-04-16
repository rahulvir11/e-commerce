const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    image: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    dob: {
        type: Date,
        required: true
    },
    tokens: [{
        token: {
            type: String,
        }
    }],
    addCart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum length for password
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    transactionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }]
});

// Method to generate authentication token
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString(), email: this.email, isAdmin: this.isAdmin }, process.env.S3_BUCKET);
        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        this.updatedAt = new Date();
        next();
    } catch (error) {
        console.log(error);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
