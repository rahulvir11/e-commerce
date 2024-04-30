const productModel = require("../models/product");
const transactionModel = require("../models/transaction");
const userModel = require("../models/user");
const addProduct = async (req ,res)=>{
try {
    const {image,pName,pPrice,pStock,pImageUrl,pDescription,pCategories}= req.body;
   const data= await productModel.create({
        image,pName,pPrice,pStock,pImageUrl,pDescription,pCategories
    })
    res.status(201).json(data);
    
} catch (error) {
    console.log(error.message);
    res.status(400).send("check console")
}
}

const allProducts = async (req , res)=>{
    try {
        const {categories,name}=req.query;
        const queryObject = {};
        // console.log(categories,name);
        if (categories) {
            queryObject.pCategories = categories;
        }

        if (name) {
            queryObject.pName = {$regex:name,$options:"i"};
        }

        const data = await productModel.find(queryObject);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}
const allTransactions= async (req,res)=>{
    try {
        const data = await transactionModel.find().populate("orderProductIds");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}
const allUsers = async (req,res)=>{
    try {
        const data = await userModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }

}
const updateProduct = async (req, res) => {
    try {
         //find the product to be updated and update it
         const newProduct = await productModel.findById(req.params.id);
         if (!newProduct) {
             return res.status(404).send("Product not found");
         }
         
         const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
         
         res.status(200).json({ updatedProduct, message: "Product has been updated" });
    } catch (error) {
         console.log(error);
         res.status(500).send(error.message);
    }
 }
 
module.exports = {addProduct ,allProducts,allTransactions,allUsers,updateProduct};
